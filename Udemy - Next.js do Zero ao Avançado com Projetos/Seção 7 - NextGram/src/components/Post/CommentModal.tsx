"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import { Post as PostType } from "../../../types/Post";
import { addComment } from "@/actions";
import FlashMessage from "../FlashMessage";
import { GrClose } from "react-icons/gr";
import Button from "../Button";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface CommentModalProps {
  post: PostType;
  currentUserId?: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

const CommentModal: React.FC<CommentModalProps> = ({
  post,
  currentUserId,
  isOpen,
  onRequestClose,
}) => {
  const [content, setContent] = useState("");
  const [flashMessage, setFlashMessage] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const handleAddComment = async () => {
    if (!currentUserId) {
      window.location.href = "/signin";
      return;
    }

    if (!content.trim()) {
      setFlashMessage({
        message: "O comentário não pode estar vazio.",
        type: "error",
      });
      return;
    }

    await addComment(post.id, currentUserId, content);
    setFlashMessage({
      message: "Comentário adicionado com sucesso.",
      type: "success",
    });
    setContent("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Comentários"
      ariaHideApp={false}
      className="w-[704px] mx-auto mt-28 bg-white rounded border border-zinc-300 p-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Comentários</h2>
        <button
          onClick={onRequestClose}
          className="bg-red-600 hover:bg-red-400 text-white p-2 rounded-full"
        >
          <GrClose />
        </button>
      </div>

      {flashMessage && (
        <FlashMessage message={flashMessage.message} type={flashMessage.type} />
      )}

      <div className="flex gap-4">
        <div className="w-1/3">
          {post.imageUrl && (
            <Image
              src={post.imageUrl}
              alt="Imagem do post"
              className="w-full h-auto rounded"
              width={250}
              height={250}
            />
          )}
        </div>

        <div className="w-2/3 flex flex-col">
          <div className="flex flex-col gap-2 mb-4 h-64 overflow-y-auto border border-zinc-200 rounded p-2">
            {post.comments && post.comments.length > 0 ? (
              post.comments.map((comment) => (
                <div key={comment.id} className="flex items-start gap-3">
                  {comment.user.image && (
                    <Image
                      src={comment.user.image}
                      alt={`${comment.user.name}'s profile`}
                      className="w-10 h-10 object-cover rounded-full"
                      width={40}
                      height={40}
                    />
                  )}
                  <div className="text-sm">
                    <p className="font-bold">{comment.user.name}</p>
                    <p>{comment.content}</p>
                    <p className="text-xs text-gray-500">
                      {formatDistanceToNow(new Date(comment.createdAt), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">
                Nenhum comentário ainda. Seja o primeiro a comentar!
              </p>
            )}
          </div>

          {/* Campo de Comentário */}
          {currentUserId && (
            <div className="flex flex-col gap-4">
              <textarea
                className="w-full h-24 p-2 border border-zinc-300 rounded text-sm placeholder:text-zinc-500 focus:ring-0 focus:outline-none"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Adicione um comentário"
              />
              <div className="flex justify-end">
                <Button type="button" text="Comentar" onClick={handleAddComment} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default CommentModal;

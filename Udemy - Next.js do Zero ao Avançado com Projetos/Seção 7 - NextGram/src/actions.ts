"use server"

import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client"
import { auth } from "auth";
import { redirect } from "next/navigation";
import {promises as fs } from "fs"
import path from "path"
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()

type FormState = {
    message: string,
    type: string
}

export async function getUserByEmail(email: string | null):Promise<User | null>  {
    if(!email)  return null

    const user = await prisma.user.findFirst({ where: { email:email }})

    return user
}

export async function updateUserProfile(
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const imageFile = formData.get("image") as File;

  if(name.length < 5) {
    return { message: "O nome precisa ter pelo menos 5 caracteres", type: "error" }
  }

  if (session.user.userId !== id) {
    return { message: "Unauthorized", type: "error" };
  }

  let imageUrl = "";
  if (imageFile) {
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, imageFile.name);
    const arrayBuffer = await imageFile.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(arrayBuffer));
    imageUrl = `/uploads/${imageFile.name}`;
  }

  await prisma.user.update({
    where: { id },
    data: { name, image: imageUrl || undefined },
  });

  revalidatePath("/profile");

  return { message: "Perfil atualizado com sucesso!", type: "success" };
}



// criar postagem

export async function createPost(
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  const session = await auth();

  if (!session) {
    redirect("/");
  }
  const caption = formData.get("caption") as string;
  const imageFile = formData.get("image") as File;

  if (!caption || imageFile.size === 0) {
    return { message: "Preencha o formulário!", type: "error" };
  }

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadDir, { recursive: true });
  const filePath = path.join(uploadDir, imageFile.name);
  const arrayBuffer = await imageFile.arrayBuffer();
  await fs.writeFile(filePath, Buffer.from(arrayBuffer));
  const imageUrl = `/uploads/${imageFile.name}`;

  await prisma.post.create({
    data: {
      imageUrl,
      caption,
      userId: session.user.userId,
    },
  });

  revalidatePath("/");

  redirect("/")

}

// Resgatar Todos os posts
export async function getAllPosts() {
  return await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
      likes: true,
      comments: {
        include: {
          user: true,
        },
      },
    },
  });
}

// Resgatar posts de um user
export async function getUserPosts(userId: string) {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  if (session.user.userId !== userId) {
    throw new Error("Unauthorized");
  }

  return await prisma.post.findMany({
    where: { userId },
    include: {
      user: true,
      likes: true,
      comments: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

// Deletar uma postagem
export async function deletePost(formData: FormData) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const userId = formData.get("userId") as string;
  const postId = formData.get("postId") as string;

  console.log(userId, session.user.userId);

  if (session.user.userId !== userId) {
    throw new Error("Unauthorized");
  }

  await prisma.post.delete({
    where: { id: postId },
  });

  revalidatePath("/my-posts");

  redirect("/my-posts");
}


import React from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";

const TodoShow = async ({ params }) => {
  await new Promise((a) => setTimeout(a, 2000));
  const { id } = await params;

  const todo = await db.todo.findFirst({ where: { id: Number(id) } });

  if (!todo) return notFound();
  return <div>{todo.titulo}</div>;
};

export default TodoShow;

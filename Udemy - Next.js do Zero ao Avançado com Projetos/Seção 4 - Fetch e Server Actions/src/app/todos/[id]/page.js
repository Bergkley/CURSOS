import React from 'react'
import { db } from '@/db'

const TodoShow = async ({params}) => {
    const {id} = await params

    const todo= await db.todo.findFirst({where: {id: Number(id)}})
  return (
    <div>{todo.titulo}</div>
  )
}

export default TodoShow
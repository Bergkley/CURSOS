import React from 'react'

const TodoEdit = async ({params}) => {
    const {id} = await params
    return (
        <div className="max-w-md mx-auto mt-10">
          <h1 className="text-2xl font-bold text-center mb-6">
            Editando: {todo.titulo}
          </h1>
        
        </div>
      );
}

export default TodoEdit
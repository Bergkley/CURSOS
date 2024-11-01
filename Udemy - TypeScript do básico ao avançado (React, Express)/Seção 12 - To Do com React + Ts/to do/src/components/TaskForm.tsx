import React from 'react'

type Props = {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
    return (
        <form>
          <div>
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              name="title"
              placeholder="Título da tarefa"
            />
          </div>
          <div>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input
              type="number"
              name="difficulty"
              placeholder="Dificuldade da tarefa (1 a 5)"
            />
          </div>
          <input type="submit" value={btnText} />
        </form>
      );
}

export default TaskForm
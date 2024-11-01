import React from 'react'
import styles from './TaskForm.module.css'

type Props = {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
    return (
        <form className={styles.form}>
          <div className={styles.input_container} >
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              name="title"
              placeholder="Título da tarefa"
            />
          </div>
          <div className={styles.input_container}>
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
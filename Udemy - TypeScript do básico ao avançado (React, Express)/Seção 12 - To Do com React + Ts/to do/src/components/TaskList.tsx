import { ITask } from "../interfaces/Task";
import styles from "./TaskList.module.css";


type Props = {
  taskList: ITask[];
};

const handleEdit = () => {
  
}

const handleDelete = () => {
  
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <div key={index} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil" onClick={() => handleEdit()}></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete()}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;

import { useState } from "react";
import styles from "./App.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// interface
import { ITask } from "./interfaces/Task";
import Modal from "./components/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowTask = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  }

  const editTask = (task: ITask):void => {
    hideOrShowTask(true);
    setTaskToUpdate(task);
  }

  return (
    <>
      <div>
        <Modal children= {<TaskForm btnText="Atualizar Tarefa" taskList={taskList} setTaskList={setTaskList} task={taskToUpdate}/> } title="Atualizar Tarefa"/>
        <Header />
        <main className={styles.main}>
          <div>
            <h2>O que você vai fazer?</h2>
            <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList} 
             />
          </div>
          <div>
            <h2>Suas tarefas</h2>
            <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

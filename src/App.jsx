import React, { useState } from "react";
import "./styles.css";

import { InputTodo } from "./Conponent/inputTodo";
import { Incomplete } from "./Conponent/incomplete";

export const App = () => {
  const [addTask, setAddTask] = useState("");
  const [inCompleteTaskItems, setInCompleteTaskItems] = useState([]);
  const [completeTaskItems, setCompleteTaskItems] = useState([]);

  const onchangeTodoText = (event) => setAddTask(event.target.value);

  const onClickAddTask = () => {
    if (!(addTask === "")) {
      const addedTasks = [...inCompleteTaskItems, addTask];
      setInCompleteTaskItems(addedTasks);
      setAddTask("");
    }
  };

  const onClickDeleteTask = (index) => {
    const deletedTasks = [...inCompleteTaskItems];
    deletedTasks.splice(index, 1);
    setInCompleteTaskItems(deletedTasks);
  };

  const onClickCompleteButton = (index) => {
    const tasks = [...inCompleteTaskItems];
    const completeTask = tasks[index];
    const completeTasks = [...completeTaskItems, completeTask];
    setCompleteTaskItems(completeTasks);
    onClickDeleteTask(index);
  };

  const onClickToReturn = (index) => {
    const tasks = [...completeTaskItems];
    const inCompleteTask = tasks[index];
    const inCompleteTasks = [...inCompleteTaskItems, inCompleteTask];
    setInCompleteTaskItems(inCompleteTasks);
    tasks.splice(index, 1);
    setCompleteTaskItems(tasks);
  };
  return (
    <>
      <InputTodo
        addTask={addTask}
        onChange={onchangeTodoText}
        onClick={onClickAddTask}
      />
      <Incomplete
        inCompleteTaskItems={inCompleteTaskItems}
        onClickCompleteButton={onClickCompleteButton}
        onClickDeleteTask={onClickDeleteTask}
      />
      <div className="complete-area">
        <p className="title">完了のタスク</p>
        <ul>
          {completeTaskItems.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickToReturn(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

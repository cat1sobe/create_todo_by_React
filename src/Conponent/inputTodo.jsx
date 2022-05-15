import React from "react";

export const InputTodo = (props) => {
  const { addTask, onClick, onChange } = props;

  const style = {
    backgroundColor: "#caffff",
    width: "400px",
    padding: "8px",
    margin: "10px",
    borderRadius: "10px"
  };

  return (
    <div style={style}>
      <input
        className="input-text"
        placeholder="タスクを入力"
        value={addTask}
        onChange={onChange}
      ></input>
      <button onClick={onClick}>追加</button>
    </div>
  );
};

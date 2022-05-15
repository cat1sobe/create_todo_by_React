import React from "react";

export const Incomplete = (props) => {
  const {
    inCompleteTaskItems,
    onClickCompleteButton,
    onClickDeleteTask
  } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のタスク</p>
      <ul>
        {inCompleteTaskItems.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickCompleteButton(index)}>完了</button>
              <button onClick={() => onClickDeleteTask(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

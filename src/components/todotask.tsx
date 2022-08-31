import React from "react";
import { ITask } from "../interface";
interface Props {
  todo: ITask;
}
const TodoTask = ({ todo }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span> {todo.taskNmae}</span>
        <span>{todo.dateNumber}</span>
      </div>
      <button type="button">x</button>
    </div>
  );
};

export default TodoTask;

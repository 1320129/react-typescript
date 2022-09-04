import React from "react";
import { ITask } from "../interface";
interface Props {
  todo: ITask;
  deletemotion(taskNmae: string): void;
}

const TodoTask = ({ todo, deletemotion }: Props) => {
  const deleteHandler = (taskName: string) => {
    deletemotion(taskName);
  };
  return (
    <div className="task">
      <div className="content">
        <span> {todo.taskNmae}</span>
        <span>{todo.dateNumber}</span>
      </div>
      <button type="button" onClick={() => deleteHandler(todo.taskNmae)}>
        x
      </button>
    </div>
  );
};

export default TodoTask;

import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { ITask } from "./interface";
import TodoTask from "./components/todotask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [date, setDate] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  //인풋에 입력한 값 스테이트에 저장
  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDate(Number(event.target.value));
    }
  };

  //제목및 날짜 투두 스테이트에 저장
  const addTask = (): void => {
    let newTask = { taskNmae: task, dateNumber: date };
    setTodo([...todo, newTask]);
  };

  return (
    <div className="App">
      {/* 헤더부분 */}
      <div className="header">
        <div className="input-container">
          <input type="text" name="task" onChange={changeHandler} />
          <input type="number" name="date" onChange={changeHandler} />
        </div>
        <button type="button" onClick={addTask}>
          추가
        </button>
      </div>
      {/* 투두리스트 부분*/}
      <div className="todo-list">
        {todo.map((todo: ITask, key: number) => {
          return <TodoTask key={key} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default App;

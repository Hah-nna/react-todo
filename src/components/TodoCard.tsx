import React from "react";
import { TodoType } from "../App";

interface TodoCardProps {
  isActive: boolean;
  item: TodoType;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

const TodoCard = ({ isActive, item, setTodos }: TodoCardProps) => {
  const toggleButtonHandler = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };

  const DeleteButtonHandler = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };

  return (
    <div key={item.id}>
      <div>{item.title}</div>
      <div>{item.content}</div>
      <div>
        <button onClick={toggleButtonHandler}>
          {isActive ? "완료" : "취소"}
        </button>
        <button onClick={DeleteButtonHandler}>삭제</button>
      </div>
    </div>
  );
};

export default TodoCard;

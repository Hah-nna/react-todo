import React from "react";
import TodoCard from "./TodoCard";
import { TodoType } from "../App";

interface TodoCardBoxProps {
  isActive: boolean;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

const TodoCardBox = ({ isActive, todos, setTodos }: TodoCardBoxProps) => {
  return (
    <div>
      <div>{isActive ? "Work" : "Done"}</div>

      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <TodoCard
              key={item.id}
              isActive={isActive}
              item={item}
              setTodos={setTodos}
            />
          );
        })}
    </div>
  );
};

export default TodoCardBox;

import React from "react";
import TodoCard from "./TodoCard";
import { props } from "../api";

const TodoCardBox = ({ isActive, todos, setTodos }: props) => {
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

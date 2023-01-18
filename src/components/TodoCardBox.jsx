import React from "react";
import TodoCard from "./TodoCard";

const TodoCardBox = ({ isActive, todos, setTodos }) => {
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

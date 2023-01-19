import Header from "./components/Header";
import styled from "styled-components";
import TodoInput from "./components/TodoInput";
import Footer from "./components/Footer";
import TodoCardBox from "./components/TodoCardBox";
import React, { useState } from "react";
import { props } from "./api";
import { todoInitial } from "./api";

function App() {
  const [todos, setTodos] = useState(initialState);

  return (
    <AppContainer>
      <Header />
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoCardBox isActive={true} todos={todos} setTodos={setTodos} />
      <TodoCardBox isActive={false} todos={todos} setTodos={setTodos} />
      <Footer />
    </AppContainer>
  );
}

const initialState: todoInitial[] = [
  {
    id: Date.now(),
    title: "화이팅",
    content: "타스공부",
    isDone: false,
  },
  {
    id: Date.now(),
    title: "하하",
    content: "리액트도 공부",
    isDone: true,
  },
  {
    id: Date.now(),
    title: "요요",
    content: "공부할거 많아서 행복하다",
    isDone: false,
  },
];

const AppContainer = styled.div`
  width: 1200px;
  height: 800px;
  margin: 0 auto;
`;

export default App;

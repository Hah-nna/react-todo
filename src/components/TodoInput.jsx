import React, { useState } from "react";
import styled from "styled-components";

const TodoInput = ({ setTodos, todos }) => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const titleChangeHandler = (event) => {
    setTitleValue(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContentValue(event.target.value);
  };

  const newTodo = {
    id: Date.now(),
    title: titleValue,
    content: contentValue,
    isDone: false,
  };

  const InputAddHandler = (e) => {
    e.preventDefault();

    setTodos((prev) => {
      return [...prev, newTodo];
    });
    setTitleValue("");
    setContentValue("");
  };

  return (
    <div>
      <form onSubmit={InputAddHandler}>
        <InputWrapper>
          <div>
            <InputTitle>제목</InputTitle>
            <InputBox value={titleValue} onChange={titleChangeHandler} />
          </div>
          <div>
            <InputTitle>내용</InputTitle>
            <InputBox value={contentValue} onChange={contentChangeHandler} />
          </div>
          <ButtonStyle type="submit">Submit</ButtonStyle>
        </InputWrapper>
      </form>
    </div>
  );
};

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  align-items: center;
`;

const InputTitle = styled.label`
  font-size: 1.3rem;
  padding-right: 1rem;
`;

const InputBox = styled.input`
  border: 1px solid black;
  width: 20rem;
  height: 1.5rem;
  border-radius: 0.5rem;
`;

const ButtonStyle = styled.button`
  border: none;
  padding: 0.6rem;
  border-radius: 1rem;
  height: 3rem;
  background-color: lightpink;
  font-size: 1rem;
`;
//
export default TodoInput;

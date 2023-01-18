import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <h2>TODOLIST</h2>
      <p>REACT</p>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: skyblue;
  padding: 1rem;
  height: 5rem;
  border-radius: 1rem;
`;

export default Header;

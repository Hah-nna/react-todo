import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBox>
      <p>copyright &copy; 2023.01.18</p>
    </FooterBox>
  );
};

const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
  height: 3rem;
  border-radius: 1rem;
  margin-top: 1rem;
`;

export default Footer;

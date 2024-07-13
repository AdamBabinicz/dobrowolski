// Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.footerBackground};
  color: ${(props) => props.theme.footerColor};
  padding: 16px;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Radom 2024 - {new Date().getFullYear()}.</p>
    </FooterContainer>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FooterContainer = styled(motion.footer)`
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
    <FooterContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p>Radom 2024 - {new Date().getFullYear()}.</p>
    </FooterContainer>
  );
};

export default Footer;

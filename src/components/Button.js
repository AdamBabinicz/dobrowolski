import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.button)`
  background: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2rem;
`;

const Button = ({ label, onClick }) => {
  return (
    <StyledButton
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;

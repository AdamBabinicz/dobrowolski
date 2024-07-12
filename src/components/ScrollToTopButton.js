import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.background};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$show ? "1" : "0")};
  visibility: ${(props) => (props.$show ? "visible" : "hidden")};
  transition: opacity 0.3s, visibility 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
    box-shadow: 0 0 10px ${(props) => props.theme.color};
  }

  @media (max-width: 375px) {
    bottom: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
  }
`;

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const checkScrollTop = () => {
    if (!showButton && window.scrollY > 150) {
      setShowButton(true);
    } else if (showButton && window.scrollY <= 150) {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showButton]);

  return (
    <ScrollButton onClick={scrollToTop} $show={showButton}>
      <FaArrowUp />
    </ScrollButton>
  );
};

export default ScrollToTopButton;

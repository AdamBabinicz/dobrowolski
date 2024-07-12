import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContainer = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 24px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;
  margin: 0 1rem;
  box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "0 2px 8px rgba(255, 255, 255, 0.6)" // Cień dla motywu dark
      : "0 2px 8px rgba(0, 0, 0, 0.2)"}; // Cień dla motywu light
`;

const ModalHeader = styled.h2`
  margin-top: 0;
  text-align: center;
`;

const ModalContent = styled.p`
  margin: 16px 0;
  text-align: left;
`;

const ModalImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  max-height: 300px;
  display: block;
  margin: auto;

  @media (min-width: 768px) {
    object-fit: contain;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${(props) => props.theme.color};
  font-size: 1.5rem;
  cursor: pointer;
`;

const Modal = ({ isOpen, onClose, header, content, imgSrc }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalHeader>{header}</ModalHeader>
        <ModalContent>{content}</ModalContent>
        {imgSrc && <ModalImage src={imgSrc} alt="Modal content" />}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 32px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  input,
  textarea {
    padding: 8px;
    border: 1px solid ${(props) => props.theme.color};
    border-radius: 4px;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="kontakt">
      <h2>Contact</h2>
      <ContactForm>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" />
        </label>
        <button type="submit">Send</button>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;

import styled from "styled-components";

export const ContactWrap = styled.div`
  background-color: #fff;

  height: 250px;
`;

export const ContactCard = styled.div`
  position: relative;
  top: 60%;

  width: 50vw;
  height: 350px;
  margin: 0 auto 0;

  background: #fff;

  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ContactH1 = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;

  margin: 25px 25px 15px 50px;
`;

export const Input = styled.input`
  margin: 10px 50px 0 50px;

  font-family: "Roboto";
  font-size: 1rem;
  font-weight: 400;

  ::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-size: 0.9rem;
    font-weight: 300;
    color: #636e72;
  }

  padding: 8px;
  border: 1px solid #5c75a1;
  border-radius: 8px;
  box-sizing: border-box;
  resize: vertical;
`;

export const TextArea = styled.textarea`
  margin: 10px 50px 0 50px;
  height: 100px;

  font-family: "Roboto";
  font-size: 1rem;
  font-weight: 400;

  ::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-size: 0.9rem;
    font-weight: 300;
    color: #636e72;
  }

  padding: 8px;
  border: 1px solid #5c75a1;
  border-radius: 8px;
  box-sizing: border-box;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  width: 80px;
  height: 30px;
  margin: 17px 50px 15px 0;
  align-self: flex-end;

  border: none;
  border-radius: 12px;
  background-color: #0984e3;
  color: #fff;

  font-family: "Mukta";
  font-size: 1rem;
  font-weight: 100;
  letter-spacing: 3px;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background-color: #d63031;
    transition: all 0.2s ease-in-out;
  }
`;

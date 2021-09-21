import React from "react";
import {
  ContactWrap,
  ContactCard,
  ContactH1,
  ContactForm,
  Input,
  TextArea,
  SubmitButton,
} from "./ContactElements";

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContactWrap id="contact">
      <ContactCard>
        <ContactForm
          action="https://formsubmit.co/jangju99@gmail.com"
          method="POST"
        >
          <ContactH1>Drop me a line —</ContactH1>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          ></Input>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></Input>
          <TextArea
            required
            type="text"
            name="text"
            placeholder="Message"
            rows="3"
          ></TextArea>
          <SubmitButton type="submit" onSubmit={onSubmit}>
            Send
          </SubmitButton>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/thankyou"
          />
          <input type="hidden" name="_captcha" value="false" />
        </ContactForm>
      </ContactCard>
    </ContactWrap>
  );
};

export default Contact;

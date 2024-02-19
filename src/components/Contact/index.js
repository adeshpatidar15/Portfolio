import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";


// require('dotenv').config();

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 80px;
  display: flex;
  justify-content: start;
  align-items: start;
  font-family: "Protest Guerrilla", sans-serif;
  font-weight: 900;
  text-decoration: underline;
  margin-top: 20px;
  color: black;
  // ${({ theme }) => theme.FloralWhite};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 35px;
  }
`;

const Desc = styled.div`
font-family: "Neuton", serif;
  font-size: 30px;
  FONT-WEIGHT:800;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
width: 80%;
height: 100%;

background-color: FloralWhite;
cursor: pointer;
border-radius: 10px;
color: color: FloralWhite;;
 box-shadow: 0 0 0px 0px rgba(0,0,0,0.4);
overflow: visible; /* Ensure overflow content is visible */
padding: 26px 20px;
display: flex;
// align-items: right;
flex-direction: column;
gap: 14px;
transition: all 0.5s ease-in-out;
&:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 1px 3px rgba(0,0,0,0.6);
    filter: brightness(1.1);
}

@media (max-width: 1500px){
    width: 80%;
height: 100%;
}
@media (max-width: 768px){
    width: 80%;
height: 100%;
}
`;

const ContactTitle = styled.div`
font-family: "Neuton", serif;
  font-size: 30px;
  margin-bottom: 6px;
  font-weight: 800;
  color: black;
  // ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: FloralWhite;
  // transparent;
  border: 2px solid black;
  // ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: black;
  // ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid black;
    // ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: FloralWhite;
  border: 2px solid Black;
  // ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: Black;
  // ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid black;
    // ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
width: fit-content;
    display: flex;
    align-items: center;
    justify-content:center;
padding: 10px 20px; /* Adjust padding as needed */
font-size: 16px; /* Adjust font size as needed */
font-weight: bold;
box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.4);
text-decoration: none;
color: black;
background-color: FloralWhite;
// border: none;
border:3px solid black;
  // border-radius: 10px 40px 40px 10px;
border-radius: 20px;
cursor: pointer;
transition: all 0.5s ease-in-out;
}

&:hover {

transform: translateY(-1px);
      box-shadow: 0 0 2px 3px rgba(0,0,0,0.4);
      // filter: brightness(1.1);
}
@media screen and (max-width: 768px) {
  display: flex;
  justify-content: center;
    align-items: center;
    
  font-size: 20px;
  padding: 10px 10px;
}
`;

const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, 'API_KEY')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CONTACT</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;

// SERVICE_ID
// TEMPLATE_ID
// API_KEY 

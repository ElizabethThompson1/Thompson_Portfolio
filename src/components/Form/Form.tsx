import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';
import validator from 'validator';
import React, { useState, useEffect } from 'react';
import { Container } from './styles'; 

export function Form() {
  const [state, handleSubmit] = useForm('movqqyqj'); // Your Formspree ID
  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!');
    }
  }, [state.succeeded]);

  const verifyEmail = (email: string) => {
    setValidEmail(validator.isEmail(email));
  };

  return (
    <Container> {/* Wrap the form in the Container styled component */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={(e) => verifyEmail(e.target.value)}
          required
          placeholder="Your Email"
        />
        <ValidationError field="email" errors={state.errors} />
        
        <textarea
          name="message"
          required
          placeholder="Your Message"
        />
        <ValidationError field="message" errors={state.errors} />
        
        <button
          type="submit"
          disabled={state.submitting || !validEmail}
        >
          Submit
        </button>

        <ToastContainer />
      </form>
    </Container>
  );
}

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm('xvojwnbn');
  if (state.succeeded) {
    return <p>I'll get back to you as soon as see your email! Thank's!</p>;
  }
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <input id="email" type="email" name="email" placeholder="Email..." />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input id="name" type="name" name="name" placeholder="Name..." />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <textarea id="message" name="message" placeholder="Message..." />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;

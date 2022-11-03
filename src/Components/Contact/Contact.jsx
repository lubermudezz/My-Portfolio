import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import '../Contact/Contact.css'


function ContactForm() {
  const [state, handleSubmit] = useForm("mwkzwzng");

  if (state.succeeded) {
    return <p className='textThanksContact'>Gracias por tu mensaje. En breve nos pondremos en contacto!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='contactForm'>
      <label htmlFor="email" className='labelContact'>
        Ingresa tu mail
      </label>
      <input
        placeholder='nombre@mail.com'
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        placeholder='tu consulta aquí ...'
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <button className="button-30" role="button" type="submit" disabled={state.submitting}>Enviar</button>

    </form>
  );
}

const Contact = () => {
  return (
    <div className='contactContainer'>
      <ContactForm />
    </div>
  )
}

export default Contact
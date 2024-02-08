// components/ContactForm.js

import React from 'react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manipular o envio do formulário
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Mensagem"></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;

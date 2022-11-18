import React, { useState, useEffect } from 'react';
import emailsList from './mocks/emailMock';

function Emails() {
  const [emails, setemails] = useState(emailsList);

  useEffect(() => {
    const verificacao = emails.every(({ status }) => status === 1);
    if (verificacao) {
      // eslint-disable-next-line no-alert
      alert('Você leu todos os seus emails');
    }
  }, [emails]);

  const togleEmail = (id, status) => {
    const newEmails = emails.map((email) => {
      if (email.id === id) {
        return { ...email, status };
      }
      return email;
    });
    setemails(newEmails);
  };

  return (
    <div>
      {emails.map(({ id, title }) => (
        <section key={ id }>
          <h3>{title}</h3>
          <button
            type="button"
            onClick={ () => togleEmail(id, 1) }
          >
            LIDO
          </button>
          <button
            type="button"
            onClick={ () => togleEmail(id, 0) }
          >
            NAO LIDO
          </button>
        </section>
      ))}
    </div>
  );
}

export default Emails;

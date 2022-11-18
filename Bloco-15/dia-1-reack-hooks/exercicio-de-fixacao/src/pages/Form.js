import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Form({ history }) {
  const [user, setUser] = useState({ name: '', age: '', city: '', modulo: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <form>
      <label htmlFor="name">
        NAME:
        <input
          type="text"
          name="name"
          id="name"
          onChange={ handleChange }
          value={ user.name }
        />
      </label>
      <label htmlFor="age">
        AGE:
        <input
          type="number"
          name="age"
          id="age"
          onChange={ handleChange }
          value={ user.age }

        />
      </label>
      <label htmlFor="city">
        CITY:
        <input
          type="text"
          name="city"
          id="city"
          onChange={ handleChange }
          value={ user.city }
        />
      </label>
      <div className="borda">
        <label htmlFor="fundamentos">
          <input
            id="fundamentos"
            type="radio"
            name="modulo"
            onChange={ handleChange }
            value="Fundamentos"
          />
          Fundamentos
        </label>
        <label htmlFor="frontEnd">
          <input
            id="frontEnd"
            type="radio"
            name="modulo"
            onChange={ handleChange }
            value="Front-End"
          />
          Front-End
        </label>
        <label htmlFor="backEnd">
          <input
            id="backEnd"
            type="radio"
            name="modulo"
            onChange={ handleChange }
            value="Back-End"
          />
          Back-End
        </label>
        <label htmlFor="cienciaComputacao">
          <input
            id="cienciaComputacao"
            type="radio"
            name="modulo"
            onChange={ handleChange }
            value="Ciências da Computação"
          />
          Ciências da Computação
        </label>
      </div>
      <button
        type="button"
        onClick={ () => {
          history.push('/emails');
        } }
      >
        exercicio 2
      </button>
    </form>
  );
}

Form.propTypes = {
  history: PropTypes.any,
}.isRequired;

export default Form;

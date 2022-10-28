import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacter } from '../redux/actions';

class Search extends React.Component {
  state = {
    nomePersonagem: '',
    isDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.handleValidation);
  };

  lookingForCharacter = () => {
    const { nomePersonagem } = this.state;
    const { dispatch, history } = this.props;
    dispatch(fetchCharacter(nomePersonagem));
    this.setState({ nomePersonagem: '' });
    history.push('/ChosenCharacter');
  };

  handleValidation = () => {
    const { nomePersonagem } = this.state;
    if (nomePersonagem !== '') {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  };

  render() {
    const { isDisabled } = this.state;
    return (
      <form>
        <label htmlFor="search">
          <input
            id="search"
            type="text"
            name="nomePersonagem"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ () => this.lookingForCharacter() }
          disabled={ isDisabled }
        >
          Pesquisar
        </button>
      </form>
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.func,
}.isRequired;

export default connect()(Search);

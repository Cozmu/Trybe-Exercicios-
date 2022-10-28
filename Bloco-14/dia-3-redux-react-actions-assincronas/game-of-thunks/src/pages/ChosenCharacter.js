import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class ChosenCharacter extends React.Component {
  render() {
    const { name, gender, culture, born, isLoading } = this.props;
    if (isLoading) return <h1>Loading ....</h1>;
    return (
      <section>
        <h2>{name}</h2>
        <p>{gender}</p>
        <p>{culture}</p>
        <p>{born}</p>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.characterReducer.features.name,
  gender: state.characterReducer.features.gender,
  culture: state.characterReducer.features.culture,
  born: state.characterReducer.features.born,
  isLoading: state.characterReducer.isLoading,
});

ChosenCharacter.propTypes = {
  born: PropTypes.any,
  culture: PropTypes.any,
  gender: PropTypes.any,
  name: PropTypes.any,
  isLoading: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps)(ChosenCharacter);

import React from "react";

class Corpo extends React.Component {
  render() {
    const { email, name: { first, last }, age, picture: { medium } } = this.props;
    return(
      <section>
        <p>{`${first} ${last}`}</p>
        <p>{email}</p>
        <p>{age}</p>
        <img src={medium} alt=""/>
      </section>
    )
  }
}

export default Corpo

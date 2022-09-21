import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { usuarios } = this.props;
    return (
      <div>
        <p> { usuarios.name } </p>
        <p> { usuarios.email } </p>
        <Image source={ usuarios.avatar } alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;
import React from 'react';

class Image extends React.Component {
    render () {
        const { source, alternativeText } = this.props;
        return <img src={ source } alt={ alternativeText } />;
    }
}

export default Image;
// Qual é o nome do componente declarado acima? => Image

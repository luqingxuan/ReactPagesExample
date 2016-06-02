import React from 'react';

import ReactDOM from 'react-dom';

require('../../css/pages/index.css');

class Hello extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
}

ReactDOM.render(<Hello name="Wrold" />, document.getElementById("react_target"));
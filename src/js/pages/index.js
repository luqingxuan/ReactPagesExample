import React from 'react';
import ReactDOM from 'react-dom';

require('css/pages/index.css');

class Hello extends React.Component {
  render() {
    return (
      <h1>{this.props.name}!</h1>
    );
  }
}

ReactDOM.render(<Hello name="hello world" />, document.getElementById("react_target"));
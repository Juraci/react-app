import React from 'react';
//import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      txt: 'Hello I have'
    }
  }

  update(e) {
    this.setState({ txt: e.target.value });
  }

  render() {
    return(
      <div>
        <input type='text' placeholder='type something' onChange={this.update.bind(this)}/>
        <h1>{this.state.txt}</h1>
      </div>
    );
  }
}

export default App;

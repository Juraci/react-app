import React from 'react';
//import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      txt: 'Default text'
    }
  }

  update(e) {
    this.setState({ txt: e.target.value });
  }

  render() {
    return(
      <div>
      <h1>{this.state.txt}</h1>
      <Widget update={this.update.bind(this)} />
      <EventTracker />
      </div>
    );
  }
}

class EventTracker extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEvent: '---'
    };

    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ currentEvent: e.type });
  }

  render() {
    return(
      <div style={{ marginTop: '10px' }}>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onPaste={this.update}
          onCut={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          cols='30'
          rows='10'
        />
        <h1>{this.state.currentEvent}</h1>
      </div>
    );
  }
}

const Widget = (props) => <input type='text' placeholder='type something' onChange={props.update}/>

export default App;

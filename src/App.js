import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.txt}</h1>
        <b>{this.props.cats} cats</b>
      </div>
    );
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cats: PropTypes.number.isRequired
};

App.defaultProps = {
  cats: 3
};

export default App;

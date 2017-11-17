import React, { Component } from 'react';
import './App.css';
import Board from './board';
// import Square from './square';


class App extends Component {
  render() {
    return (
      <div className="App">

      {/* <Square/> */}
      <Board/>

      </div>
    );
  }
}

export default App;

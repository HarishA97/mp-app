import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {password: new Date().toString()};
  }

  render() {
    return (
      <div className="App" id="content">
        <p>Hi Harish</p>
        <p>{this.state.password}</p>
      </div>
    );
  }
}

export default App;

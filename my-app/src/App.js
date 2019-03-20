import React, { Component } from 'react';
import Header from "./components/Header";
import Button from "./components/Button";

class App extends Component {
  

    toggleDiv = () => {
      const { show } = this.state;
      this.setState({ show : !show })


  }
  render() {
    return (
      <div className="App">
        <Header />
        <Button />
      </div>
    );
  }
}

export default App;

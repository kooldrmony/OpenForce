import React, { Component } from 'react';
import Header from "./components/Header";
import Button from "./components/Button";
import Box from "./components/Box";

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
        <Box />
      </div>
    );
  }
}

export default App;

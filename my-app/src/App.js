import React, { Component } from 'react';
import Header from "./components/Header";
import Button from "./components/Button";

class App extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      show: true
    }
    this.toggleDiv = this.toggleDiv.bind(this);
    }

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

import React, { Component } from 'react';
// import axios from 'axios';
import Header from "./components/Header";
import Button from "./components/Button";
// import Quotes from "./components/Quotes";
import smallButton from "./components/smallButton";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     quotes: [],
  //     isLoaded: false,
  //   }
  // }
  // componentDidMount() {
  //   fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         isLoaded: true,
  //         quotes: json,
  //       })
  //     });
  // }

  render() {

    // let { isLoaded, quotes } = this.state;

    // if(!isLoaded) {
    //   return <div>Loading...</div>
    // }

    // else {


    return (
      <div className="App">
        <Header />
        <Button />
        <smallButton />
      </div>
    );
  }

}


export default App;

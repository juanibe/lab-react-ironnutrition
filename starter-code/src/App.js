import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import Foodbox from './Foodbox'
import 'bulma/css/bulma.css'



class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     data : foods
  //   }
  //}


  
  render() {
  
    return (
      <div className="App">
        <Foodbox />
      </div>
    );
  }
}

export default App;

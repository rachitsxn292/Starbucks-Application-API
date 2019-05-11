import React, { Component } from 'react';
import './style.css'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Passcode from './Passcode';
import MyCards from './MyCards';
import Frame from './Frame';
import AddCard from './AddCard';
import Balance from './Balance';
import Orders from './Orders';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Passcode}/>
          <Route path='/mycards' component={MyCards}/>
          <Route path='/frame' component={Frame}/>
          <Route path='/addcard' component={AddCard}/>
          <Route path='/balance' component={Balance}/>
          <Route path='/orders' component={Orders}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

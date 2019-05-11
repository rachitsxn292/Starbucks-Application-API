import React, { Component } from 'react';
import './style.css'
import './App.css';
import MainScreen from './MainScreen';

class Passcode extends Component {
    render() {
        return (
            <div className="App">
                <h1>Welcome to Starbucks</h1>
                <h3>Enter Passcode</h3>
                <MainScreen />
            </div>
        );
    }
}


export default Passcode;

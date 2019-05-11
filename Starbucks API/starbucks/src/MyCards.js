import React, { Component } from 'react';
import './style.css'
import './App.css';
import Frame from './Frame';
import Axios from 'axios';
import Card from './Card';
import {Redirect} from 'react-router';

class MyCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        Axios.get('https://whispering-hollows-61823.herokuapp.com:3001/getCards').then(result => {
            this.setState({
                cards: result.data
            })
        })
    }

    render() {
        
        var displayCards = this.state.cards.map(card => {
            return (
                <Card key={card._id} cardno={card.cardno} cvv={card.cvv} />
            )
        })
        return (
            <div className="App">
               
                <h1>Welcome to Starbucks</h1>
                <h3>My Cards</h3>
                <br/>
                <div style={{height: '300px', width: '180px', display: 'inline-block', overflowY: 'scroll'}}>
                    {displayCards}
                </div>
                <Frame />
            </div>
        )
    }
}

export default MyCards;
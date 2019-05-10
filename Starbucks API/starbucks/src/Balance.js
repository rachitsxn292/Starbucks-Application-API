import React, { Component } from 'react';
import './style.css'
import './App.css';
import Frame from './Frame';
import Axios from 'axios';
import {Redirect} from 'react-router';

class Balance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3001/getCards').then(result => {
            this.setState({
                cards: result.data
            })
        })
    }

    render() {
        let redirectVar = '';
        if((localStorage.getItem('cookie') != 1)){
            redirectVar = <Redirect to='/'/>
        }
        var displayCards = this.state.cards.map(card => {
            return (
                <tr>
                    <td>{card.cardno}</td>
                    <td>{card.balance}</td>
                </tr>
            )
        })
        return (
            <div className="App">
                {redirectVar}
                <h1>Welcome to Starbucks</h1>
                <h3>View Balances</h3>
                <br/>
                <div style={{height: '300px', width: '180px', display: 'inline-block', overflowY: 'scroll'}}>
                    <table>
                        <th>Card No</th>
                        <th>Balance</th>
                        <tbody>
                            {displayCards}
                        </tbody>
                    </table>
                </div>
                <Frame />
            </div>
        )
    }
}

export default Balance;
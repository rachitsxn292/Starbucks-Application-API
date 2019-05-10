import React, { Component } from 'react';
import './style.css'
import './App.css';
import Frame from './Frame';
import Axios from 'axios';
import {Redirect} from 'react-router';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3001/orders').then(result => {
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
                    <td>&nbsp;&nbsp;</td>
                    <td>{card.date.substr(11, 5)}</td>
                    <td>&nbsp;&nbsp;</td>
                    <td><small><button onClick={()=>{
                        const cardno = card.cardno;
                        const orderid = card._id;
                        Axios.post('http://localhost:3001/cancelOrder', {cardno, orderid}).then(result=>{
                            alert(result.data.message);
                        })
                    }}>Cancel</button></small></td>
                </tr>
            )
        })
        return (
            <div className="App">
                {redirectVar}
                <h1>Welcome to Starbucks</h1>
                <h3>Orders</h3>
                <br/>
                <div style={{height: '300px', width: '220px', display: 'inline-block', overflowY: 'scroll'}}>
                    <table>
                        <th>Card No</th>
                        <th>&nbsp;&nbsp;</th>
                        <th>Time</th>
                        <th>&nbsp;&nbsp;</th>
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

export default Orders;
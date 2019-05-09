import React, { Component } from 'react';
import './style.css'
import './App.css';
import axios from 'axios';

class AddCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            cvv: '',

        }
    }

    AddCardChange(event) {
        this.setState({
            cardNumber: event.target.value
        })
    }
    AddCvvChange(event) {
        this.setState({
            cvv: event.target.value
        })
    }
    AssignCreateData(event) {
        axios.post('http://localhost:3001/AddCard', {
            cardNumber: this.state.cardNumber,
            cvv: this.state.cvv,
        })
            .then(response => {
                if (response.data === true) {
                    console.log("Data Submitted");
                }
            });
    }
    render() {
      
        return (
            <div>
                
                <div>
                    <h2>Add New Card</h2>
                    <div >
                        <input type="text" style={{width: '220px'}} name="cardno" id="cardno" minLength='9' maxLength='9' value={this.state.cardNumber} onChange={this.AddCardChange.bind(this)} placeholder="Enter Your Card Number" />
                    </div>
                    <div >
                        <input type="password" style={{width: '220px'}} name="cvv" id="cvv" minLength='3' maxLength='3' value={this.state.cvv} onChange={this.AddCvvChange.bind(this)} placeholder="Enter Your Cvv" />
                    </div>
                    <div>
                        <button type="submit" style={{textDecorationStyle: 'solid', borderRadius: '15px', textDecorationColor: 'black', fontSize: '21px'}} onClick={this.AssignCreateData.bind(this)} name="SubmitAddCard" id="SubmitAddCard" >Submit Card Details</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCard;
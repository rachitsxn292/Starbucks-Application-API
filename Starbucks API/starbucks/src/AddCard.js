import React, { Component } from 'react';
import './style.css'
import './App.css';
import Axios from 'axios';
import Frame from './Frame';
import {Redirect} from 'react-router';

class AddCard extends Component{
    constructor(props){
        super(props);
        this.state={
            cardno: '',
            cvv: ''
        }

        this.onChange = this.onChange.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    getValue(){
        const {cardno} = this.state;
        const {cvv} = this.state;
        Axios.post('http://localhost:3001/addCard', {cardno, cvv}).then(result=>{
            if(result.status === 200 && result.data === true){
                alert('Card added successfully');
            }
            else{
                alert('Unable to add card');
            }
        });
    }

    render(){
        let redirectVar = '';
        if((localStorage.getItem('cookie') != 1)){
            redirectVar = <Redirect to='/'/>
        }

        return(
            <div className="App">
                {redirectVar}
                <h1>Welcome to Starbucks</h1>
                <h3>Add Card</h3>
                <div style={{height: '300px', width: '220px', display: 'inline-block'}}>
                        <input type="text" style={{width: '220px'}} name="cardno" id="cardno" minLength='9' maxLength='9' value={this.state.cardno} placeholder="Card No" onChange={this.onChange}/><br/><br/>
                        <input type="text" style={{width: '220px'}} name="cvv" id="cvv" minLength='3' maxLength='3' value={this.state.cvv} placeholder="CVV" onChange={this.onChange}/><br/>
                    <br/>
                    <div className="grp">
                        <button style={{textDecorationStyle: 'solid', borderRadius: '15px', textDecorationColor: 'black', fontSize: '21px'}} onClick={this.getValue}>Add Card</button>
                    </div>
                </div>
                <Frame/>
                {/* <div className="grp">
                    <Button value="1" getValue={this.getValue} />
                    <Button value="4" getValue={this.getValue} />
                    <Button value="7" getValue={this.getValue} />
                    <Button value=" " getValue={this.getValue} />
                </div>

                <div className="grp">
                    <Button value="2" getValue={this.getValue} />
                    <Button value="5" getValue={this.getValue} />
                    <Button value="8" getValue={this.getValue} />
                    <Button value="0" getValue={this.getValue} />
                </div>

                <div className="grp">
                    <Button value="3" getValue={this.getValue} />
                    <Button value="6" getValue={this.getValue} />
                    <Button value="9" getValue={this.getValue} />
                    <Button value="X" getValue={this.getValue} />
                </div> */}
                
            </div>
        )
    }
}

export default AddCard;
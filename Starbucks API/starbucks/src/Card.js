import React, {Component} from 'react';
import Axios from 'axios';

class Card extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(            
            <div className="cardLayout">
                <h6>{this.props.cardno}</h6>
                <small><button onClick={()=>{
                    const cardno = this.props.cardno;
                    Axios.post('http://localhost:3001/minusBalance', {cardno}).then(resultB=>{
                        // alert(result.data.message);
                        if(resultB.status === 200 && resultB.data === true){
                            Axios.post('http://localhost:3001/makeOrder', {cardno}).then(resultO=>{
                                alert(resultO.data.message);
                            })
                        }
                        else{
                            alert('Unable to place order');
                        }
                    })
                }}>Scan Now</button></small>
                <br/><br/>
                <small><button onClick={()=>{
                    const cardno = this.props.cardno;
                    Axios.post('http://localhost:3001/removeCard', {cardno}).then(result=>{
                        alert(result.data.message);
                    })
                }}>Remove Card</button></small>
            </div>
        );
    }
}

export default Card;
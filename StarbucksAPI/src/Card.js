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
                    
                    })
                }}>Scan Now</button></small>
                <br/><br/>
                <small><button onClick={()=>{
                    
                }}>Remove Card</button></small>
            </div>
        );
    }
}

export default Card;
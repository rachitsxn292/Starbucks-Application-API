import React, {Component} from 'react';
import './style.css'
import './App.css';
import Frame from './Frame';


class Orders extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="App">
                <h1>Welcome to Starbucks</h1>
                <h3>Manage Order</h3>
                <Frame/>
            </div>
        );
    }
}

export default Orders;
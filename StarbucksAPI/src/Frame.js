import React, {Component} from 'react';
import Button from './Button';
import {Link} from 'react-router-dom';

class Frame extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="App">
                <Link to='/balance' style={{width: '40px', fontSize: '30px'}}><i class="fas fa-dollar-sign"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{/*View Balance*/}
                <Link to='/mycards' style={{width: '40px', fontSize: '30px'}}><i class="far fa-credit-card"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{/*My Cards*/}
                <Link to='/orders' style={{width: '40px', fontSize: '30px'}}><i class="fas fa-receipt"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{/*Manage Orders*/}
                <Link to='' style={{width: '40px', fontSize: '30px'}}><i class="fa fa-map-marker"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{/*Location*/}
                <Link to='/addcard' style={{width: '40px', fontSize: '30px'}}><i class="fas fa-cog"></i></Link>{/*Add Card*/}
            </div>
        )
    }
}

export default Frame;
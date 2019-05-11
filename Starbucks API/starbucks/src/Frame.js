import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Frame extends Component{
    
    render(){
        return(
            <div className="App">
                <Link to='/balance' style={{width: '40px', fontSize: '30px'}}><i class="fas fa-dollar-sign"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{/*View Balance*/}
                <Link to='/mycards' style={{width: '40px', fontSize: '30px'}}><i class="far fa-credit-card"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{/*My Cards*/}
                <Link to='/orders' style={{width: '40px', fontSize: '30px'}}><i class="fas fa-receipt"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{/*Manage Orders*/}
                <Link to='/addcard' style={{width: '40px', fontSize: '30px'}}><i class="fas fa-cog"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{/*Add Card*/}
                <Link to='/' onClick={()=>{
                    localStorage.setItem('cookie', 0);
                }} style={{width: '40px', fontSize: '30px'}}><i class="fas fa-power-off"></i></Link>{/*Location*/}
            </div>
        )
    }
}

export default Frame;
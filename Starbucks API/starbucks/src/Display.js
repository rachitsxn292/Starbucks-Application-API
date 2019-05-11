import React, { Component } from 'react';

class Display extends Component{
    

    render(){
        return(
            
                <input type="text" readOnly value={this.props.number}></input>
            
        );
    }
}

export default Display;
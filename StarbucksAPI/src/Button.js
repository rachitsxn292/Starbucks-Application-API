import React, { Component } from 'react';


class Button extends Component{

    
    render(){
        return(
            <div>
                <input type="button" value={this.props.value} onClick={this.props.getValue}></input>
            </div>
        );
    }
}

export default Button;
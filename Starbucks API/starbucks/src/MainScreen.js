import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';
import axios from 'axios';
import { Redirect } from 'react-router';

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: '',
            number2: '',
            operation: '',
            result: '',
            count: 0,
            d1: '',
            ds1: '',
            d2: '',
            ds2: '',
            d3: '',
            ds3: '',
            d4: '',
            ds4: '',
            pin: '',
            invalidPin: '',
            authenticated: 0
        }

        this.getValue = this.getValue.bind(this);
    }

    getValue(event) {
        var { count } = this.state;
        var temp = event.target.value;
        if (temp === 'X') {
            this.setState({
                pin: ''
            })
            if (count === 1) {
                this.setState({
                    d1: '',
                    ds1: '',
                    count: 0
                })
            }
            else if (count === 2) {
                this.setState({
                    d2: '',
                    ds2: '',
                    count: 1
                })
            }
            else if (count === 3) {
                this.setState({
                    d3: '',
                    ds3: '',
                    count: 2
                })
            }
            else if (count === 4) {
                this.setState({
                    d4: '',
                    ds4: '',
                    count: 3
                })
            }
        }


        else {
            if (count === 0) {
                this.setState({
                    d1: temp,
                    ds1: '*',
                    count: 1
                })
            }
            else if (count === 1) {
                this.setState({
                    d2: temp,
                    ds2: '*',
                    count: 2
                })
            }
            else if (count === 2) {
                this.setState({
                    d3: temp,
                    ds3: '*',
                    count: 3
                })
            }
            else if (count === 3) {
                this.setState({
                    d4: temp,
                    ds4: '*',
                    count: 4
                    // pin: this.state.d1+this.state.d2+this.state.d3+temp
                })
                const pin = this.state.d1 + this.state.d2 + this.state.d3 + temp;
                axios.post('http://localhost:3001/pinValidation', { pin }).then(result => {
                    console.log(result);
                    if (result.status === 200 && result.data === true) {
                        localStorage.setItem('cookie', 1);
                        this.setState({
                            authenticated: 1
                        })
                    }
                    else {
                        this.setState({
                            invalidPin: 'Invalid Pin',
                            d1: '',
                            d2: '',
                            d3: '',
                            d4: '',
                            ds1: '',
                            ds2: '',
                            ds3: '',
                            ds4: '',
                            count: 0,
                            pin: ''
                        })
                    }
                })
            }
        }
    }

    render() {
        var myCards = '';
        // if(localStorage.getItem('cookie') === 1){
        //     myCards = <Redirect to='/mycards'/>
        // }
        if(this.state.authenticated === 1){
            myCards = <Redirect to='mycards'/>
        }
        return (
            <div>
                {myCards}
                <strong>{this.state.invalidPin}</strong>
                <br /><br />
                <span>
                    <Display number={this.state.ds1} />&nbsp;
                    <Display number={this.state.ds2} />&nbsp;
                    <Display number={this.state.ds3} />&nbsp;
                    <Display number={this.state.ds4} />
                </span>
                <br />
                
                <div className="grp">
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
                </div>
            </div>
        );
    }
}

export default MainScreen;
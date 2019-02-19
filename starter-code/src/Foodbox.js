
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import SingleFood from './SingleFood'
import Form from './Form'

class Foodbox extends Component {
    constructor(props) {
        super()
        this.state = {
            data: foods,
        }
    }

    render() {
        console.log(this.state.data)
        const foodData = this.state.data.map((f, index) => {
            return (
                <SingleFood key={index} {...f} />
            )
        
        })
        return (
            <div>
                {foodData}
                <button onClick={this.formHandler}>Add food</button>
                <Form/>
            </div>
        );
    }
}

export default Foodbox;




import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import SingleFood from './SingleFood';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            name :'',
            calories:'',
            image:''
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addFood(this.state);   
        this.setState({
          name: '',
          director: '',
          hasOscars: false,
          IMDbRating: '' 
        })  
      }

    handleNameInput = (event) => {
        this.setState({
            name:event.target.value
        })
    }

    handleCaloriesInput = (event) => {
        this.setState({
            calories:event.target.value
        })
    }
   
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="field">
                    <label className="label is-medium">Medium input</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-medium" type="text" value={this.name} onChange={(e)=>{this.handleNameInput(e)}} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope fa-xs"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check fa-xs"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-medium" type="text" value={this.calories} onChange={(e)=>{this.handleCaloriesInput(e)}} />
                        <span className="icon is-left">
                            <i className="fas fa-envelope fa-sm"></i>
                        </span>
                        <span className="icon is-right">
                            <i className="fas fa-check fa-sm"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-medium" type="email" value='' />
                        <span className="icon is-medium is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-medium is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </div>
                </div>

                <input type="submit"></input>

            </form>
        );
    }
}

export default Form;
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            textInput: '',
            arrayTextInput: ''
        }
    }

    onInputChange = (event) => {
        this.setState({
            textInput: event.target.value
        });
    }

    onArrayInputChange = (event) => {
        this.setState({
            arrayTextInput: event.target.value
        })
    }

    saveArrayTextClick = (event) => {
        this.props.dispatch({type: 'ARRAY_EXAMPLE', payload: this.state.arrayTextInput});
    }

    saveTextClick = (event) => {
        // HERE IS WHERE WE ARE GOING TO PUSH THE TEXT TO THE REDUCER / STORE
        // DISPATCH HERE!
        console.log('button clicked');
        this.props.dispatch({type: 'SAVE_TEXT', payload: this.state.textInput});
    }

    increaseClick = (event) => {
        this.props.dispatch({type: 'INCREASE_NUMBER'});
    }

    decreaseClick = (event) => {
        this.props.dispatch({type: 'DECREASE_NUMBER'});
    }

    onResultsClick = (event) => {
        this.props.history.push('/results');
    }

    render() {
        return (
            <div>
                <h1>HOME PAGE</h1>
                <button onClick={this.onResultsClick}>Results</button>
                <br/>
                <input onChange={this.onInputChange} type="text" />
                <button onClick={this.saveTextClick}>Save Text</button>
                <br/>
                <button onClick={this.increaseClick}>+</button>
                <button onClick={this.decreaseClick}>-</button>
                <br />
                <input onChange={this.onArrayInputChange} type="text" />
                <button onClick={this.saveArrayTextClick}>Save Text</button>
            </div>
        )
    }
}

export default connect()(Home);
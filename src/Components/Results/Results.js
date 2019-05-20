import React, { Component } from 'react';
import { connect } from 'react-redux';


class Results extends Component {

    onHomeClick = (event) => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>RESULTS PAGE</h1>
                <button onClick={this.onHomeClick}>Home</button>
                <h1>{this.props.reduxState.textReducer}</h1>
                <h2>{this.props.reduxState.numberReducer}</h2>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {
      reduxState
    }
}

export default connect(mapReduxStateToProps)(Results);
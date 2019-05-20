import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

// let x = ''
// dispatch events, sets x equal to something
// this.props.reduxState.reducerName, gimme x
const textReducer = (state = '', action ) => {
    if (action.type === 'SAVE_TEXT') {
        return action.payload;
    }

    return state;
}

const numberReducer = (state = 0, action) => {
    if (action.type === "INCREASE_NUMBER") {
        return state + 1;
    } else if (action.type === "DECREASE_NUMBER") {
        return state - 1;
    }
    return state;
}

const arrayReducer = (state = [], action) => {
    if(action.type === "ARRAY_EXAMPLE") {
        return [...state, action.payload];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        textReducer,
        numberReducer,
        arrayReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {createLogger} from 'redux-logger';
const inititalState = {};

// redux - thunk를 적용시켰습니다.
const logger = createLogger();
const store = createStore(
        rootReducer, 
        inititalState,
         
        compose(applyMiddleware(thunk), 
                applyMiddleware(logger),
                window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
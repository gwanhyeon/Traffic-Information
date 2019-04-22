import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import 'bootstrap/dist/css/bootstrap.css'
// 스토어 생성 리덕스

import modules from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

// compose를 통한 ReduxThunk 연결 
const store = createStore(modules,compose(applyMiddleware(ReduxThunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// App.js Provider를 통하여 리액트 프로젝트에 적용시키기
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let _rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
            </React.StrictMode>,
        document.getElementById('root')
    );
}

_rerender();
store.subscribe(_rerender);

reportWebVitals();
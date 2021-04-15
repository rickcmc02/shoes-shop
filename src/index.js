import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import './static/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let iniValue = []

function reducer(state = iniValue, doAction) {
  let found = state.findIndex((a)=>{ return a.id === doAction.payload.id });
  
  if (doAction.type === 'productAdd') {  
    if (found >= 0) {
      let copy = [...state];
      copy[found].quan++;
      return copy
    } else {
      let copy = [...state];
      copy.push(doAction.payload);
      return copy
    }

  } else if (doAction.type === 'quanAdd') {
    let copy = [...state];    
    copy[found].quan++;
    return copy

  } else if (doAction.type === 'quanSub') {
    let copy = [...state];
    if (copy[found].quan > 1) {
      copy[found].quan--;
    } else {
      alert("minimum quantity")
    }
    return copy

  } else {
    return state
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

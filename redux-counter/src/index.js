import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
// import { increment, decrement } from './actions'; // Enable when check below stage example

const store = createStore(reducer);
/**
 * [Stage 1] Log the initial state
 */
// console.log(store.getState());

/**
 * [Stage 2] Dispatch action then log to your console
 */
// console.log("======== Start increment ========");
// store.dispatch(increment(1))
// console.log(store.getState());
// console.log("======== End increment ========");

// console.log("======== Start decrement ========");
// store.dispatch(decrement(1))
// console.log(store.getState());
// console.log("======== End decrement ========");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

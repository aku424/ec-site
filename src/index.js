import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './reducks/store/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//./reducks/store/storeで定義したcreateStoreを呼び出している
//呼び出すことでstoreができる
export const store = createStore();

ReactDOM.render(
  //storeというpropsにstoreを渡す。
  //Providerにstore（createStore()の実行結果）を渡すことでProviderの子要素であるAppでもstoreの情報が使えるようになる
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

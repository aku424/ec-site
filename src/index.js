import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './reducks/store/store';
import {ConnectedRouter} from 'connected-react-router'
import * as History from 'history';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//createBrowserHistoryの返り値がhistoryに入る。
//そして、storeなどでも使われる。
const history = History.createBrowserHistory()


//reducks/store/storeで定義したcreateStoreを呼び出している
//呼び出すことでstoreができる
//store.jsで定義されているcreateStoreの呼び出しだが、引数には上で定義している定数が入る
export const store = createStore(history);

ReactDOM.render(
  //storeというpropsにstoreを渡す。
  //Providerにstore（createStore()の実行結果）を渡すことでProviderの子要素であるAppでもstoreの情報が使えるようになる
  <Provider store = {store}>
    <ConnectedRouter history = {history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

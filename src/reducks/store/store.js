import { formatMs } from '@material-ui/core';
//redux-thunkの導入
//非同期処理を待つため
import thunk from "redux-thunk"
import {
    createStore as reduxCreateStore,
    //combineReducersはいろいろなstateをまとめる役割がある
    combineReducers,
    applyMiddleware
}from "redux";

import {connectRouter, routerMiddleware} from 'connected-react-router';
//管理するreducerが増えればここも増える
import {userReducer} from "../users/reducers"

//historyはindex.jsから来ている。
//これはcreatBrowserHistory。これはroutingの履歴がわかるもの
//引数のhistoryは呼び出し元のindex.jsの引数に書いてある
export default function createStore(history){
    return reduxCreateStore(
        combineReducers({
            //管理するreducerが増えればここも増える
            //routerのstateはpathの情報
            router: connectRouter(history),
            users: userReducer
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
} 
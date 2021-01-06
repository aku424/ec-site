import { formatMs } from '@material-ui/core';
import {
    createStore as reduxCreateStore,
    //combineReducersはいろいろなstateをまとめる役割がある
    combineReducers
}from "redux";

//管理するreducerが増えればここも増える
import {userReducer} from "../users/reducers"

export default function createStore(){
    return reduxCreateStore(
        combineReducers({
            //管理するreducerが増えればここも増える
            users: userReducer
        })
    )
} 
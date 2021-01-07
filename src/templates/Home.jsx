import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {push} from "connected-react-router"
import {getUserId} from "../reducks/users/selectors"
import { signInAction } from '../reducks/users/actions';


const Home = () => {
    const selector = useSelector(state =>state)
    const uid = getUserId(selector)
    const dispatch = useDispatch()
    return(
        <>
            <h2>home</h2>
            <p>{uid}</p>
            <button onClick = {() => dispatch(signInAction({uid: "0001", username: "takuto"}))}>
                更新
            </button>
            <button onClick={() => dispatch(push('/login/'))}>
                ログイン画面にいく
            </button>
        </>
    )
};

export default Home;
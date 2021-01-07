import React from "react";
import {useDispatch, useSelector} from "react-redux";
// import {push} from "connected-react-router"
import {getUserId, getUsername} from "../reducks/users/selectors"
// import { signInAction } from '../reducks/users/actions';
import {signIn} from "../reducks/users/operations"


const Home = () => {
    //useSelectorでstoreで管理している全部のstateを取得できる
    const selector = useSelector(state =>state)
    const uid = getUserId(selector)
    const username = getUsername(selector)
    const dispatch = useDispatch()
    return(
        <>
            <h2>home</h2>
            <p>{uid}</p>
            <p>{username}</p>
            <button onClick = {() => dispatch(signIn())}>
                更新
            </button>
            {/* <button onClick={() => dispatch(push('/login/'))}>
                ログイン画面にいく
            </button> */}
        </>
    )
};

export default Home;
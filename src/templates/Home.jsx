import React from "react";
import {useDispatch} from "react-redux";
import {push} from "connected-react-router"

const Home = () => {
    const dispatch = useDispatch()
    return(
        <>
            <h2>home</h2>
            <button onClick={() => dispatch(push('/login/'))}>
                ログイン画面にいく
            </button>
        </>
    )
};

export default Home;
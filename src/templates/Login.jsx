import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {push} from "connected-react-router";
import { signInAction } from '../reducks/users/actions';


const Login = () =>{
     //dispatchは値を変更するのに使う
    const dispatch = useDispatch()

    const selector = useSelector((state) => state);
    console.log(selector.users);
    console.log(selector.router);
    return(
        <div>
            <h2>ログイン</h2>
            {/* pushは引数にとったurlのコンポーネンとに移動する */}
            <button onClick={() => dispatch(push('/'))}>
                ログインする
            </button>
            <button onClick = {() => dispatch(signInAction({uid: "0001", username: "takuto"}))}>
                更新
            </button>
        </div>
    )
};


export default Login;
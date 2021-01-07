import {signInAction} from "./actions";
import {push} from "connected-react-router"

export const signIn = ()=>{
    return async (dispatch, getState) => {
        //getState関数は現在のstoreのstateの値を取得することができる。
        const state = getState()
        const isSignedIn = state.users.isSignedIn

        //sign inされていなければsign inをしてsign inしたuserの値を変更する
        //今回はまずgithubを使ってやってみる
        if (!isSignedIn) {
            const url = "https://api.github.com/users/aku424"

            const response = await fetch(url);
            
            const username = response.login
            console.log(username);
            dispatch(signInAction({
                isSignedIn: true,
                uid: "0001", 
                username: username
            }))
            dispatch(push ('/'))
        }
    }
}
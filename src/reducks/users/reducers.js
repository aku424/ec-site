import * as Actions from "./actions"
import initialState from "../store/initialState"

//第一引数にstate
//現在のstateの状態、もしそれが指定されていなかったら、stateの初期状態の値
//第二引数にはactionがreturnした値→今回場合だとaction.jsの中のreturnの値
//今回の引数名は「action」だが自分で決めても問題ないと思う。
export const userReducer = (state = initialState.users, action)=>{
    //actionのtypeがどうかで決めます
    switch(action.type){
        //ActionがSIGN_INだったら実行
        case Actions.SIGN_IN:
            return{
                //「...」で展開。下の感じ
                //このstateがないとaction.payloadが更新された時に上書きされてしまうから、payloadに含まれないstateは消されてしまう
                ...state,
                //(isSignedIn: false,
                //uid: "",
                //username: "")
                ...action.payload
                //isSignedIn: true,
                //uid: userState.id,
                //username: userState.name
            }
        default:
            return state
    }

}
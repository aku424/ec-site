export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState)=>{
    return{
        type: "SIGN_IN",
        payload: {
            isSignedIn: true,
            //userStateはobject型でuserStateのidとuserStateのnameを表示する
            //だから引数にはobject型がくる
            //object方は{id:000, name:user}のようなもの
            uid: userState.uid,
            username: userState.username
        }
    }
}
export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = ()=>{
    return{
        type: "SIGN_OUT",
        payload: {
            isSignedIn: false,
            uid: "",
            username: ""
        }
    }
}
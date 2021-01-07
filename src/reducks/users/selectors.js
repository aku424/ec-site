//このファイルではstateとして扱っている関数を呼び出す処理をまとめて書いている。
import {createSelector} from 'reselect';

//この定数でstate全体のusersを定義している。
//stateの引数には呼び出し元の関数の引数の値が入る
const usersSelector = (state) => state.users;

//getUserIdという関数を定義していて、上で定義したusersSelectorの中からuidを取り出している
export const getUserId = createSelector(
    [usersSelector],
    state =>state.uid
)
export const getUsername = createSelector(
    [usersSelector],
    state =>state.username
)
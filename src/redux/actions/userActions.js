import { login } from "../../firebase";
import axios from 'axios';
let url = "https://rickandmortyapi.com/api/character"

//1.- Constants
export const TYPING_CREDENTIALS = "TYPING_CREDENTIALS";
export const SET_USER_DATA_SUCCESS = "SET_USER_DATA_SUCCESS";

export const UPDATE_USER_DATA = "UPDATE_USER_DATA"

export const REMOVE_USER_DATA = "REMOVE_USER_DATA"

//mortys
export const FETCH_USERS_LIST = "FETCH_USERS_LIST"
export const FETCH_USERS_LIST_SUCCESS = "FETCH_USERS_LIST_SUCCESS"
export const FETCH_USERS_LIST_ERROR = "ERROR"

//2.-Actions

//mortys
function fetchUsersListSuccess(users){
  return {
    type: FETCH_USERS_LIST_SUCCESS,
    payload: users
  }
}

function fetchUsersListError(error){
  return{
    type: FETCH_USERS_LIST_ERROR,
    payload: error
  }
}

function removeUserDataSuccess(payload){
  return{
    type: REMOVE_USER_DATA,
    payload
  }
}

function updateUserDataSuccess(data){
  return{
    type: UPDATE_USER_DATA,
    payload: data
  }
}

function typingCredentialsSuccess(credentials) {
  //esto devuelve un action
  return {
    type: TYPING_CREDENTIALS,
    credentials
  };
}

//3.-Actions creators thunks(Se conecta con el servdior)


export let fetchUsersList =() => (dispatch, getState) =>{
  let state = getState()
  if(state.users.array.length > 1) return

  axios.get(url)
  .then(res=> {
    dispatch(fetchUsersListSuccess(res.data.results))
  })
  .catch(res =>{
    dispatch(fetchUsersListError(res.response.err))
  })
}

function setUserDataSuccess(user) {
  return {
    type: SET_USER_DATA_SUCCESS,
    user
  };
}

export let removeUserData = () => (dispatch) => {

  //Esto es hardcodeo, pero si cambian, es necesario hacerlo aquí
  
  let current = {
    name: '',
    email: '',
    bio: ''
  }
  dispatch(removeUserDataSuccess(current))
}

export let updateUserData = (data) => (dispatch) => {
  dispatch(updateUserDataSuccess(data))
}

export let typingCredentials = credentials => dispatch => {
  //supongamos que aqui consumimos una api y todo sale bien
  return dispatch(typingCredentialsSuccess(credentials));
};

export let setUserData = (email, password) => dispatch => {
  login(email, password).then(user => dispatch(setUserDataSuccess(user)));
};

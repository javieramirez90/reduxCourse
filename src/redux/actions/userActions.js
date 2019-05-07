import { login } from "../../firebase";

//1.- Constants
export const TYPING_CREDENTIALS = "TYPING_CREDENTIALS";
export const SET_USER_DATA_SUCCESS = "SET_USER_DATA_SUCCESS";

export const UPDATE_USER_DATA = "UPDATE_USER_DATA"

export const REMOVE_USER_DATA = "REMOVE_USER_DATA"



//2.-Actions

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

//3.-Actions creators thunks
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

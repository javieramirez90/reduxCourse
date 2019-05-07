import { combineReducers } from "redux";

import {
  TYPING_CREDENTIALS,
  SET_USER_DATA_SUCCESS
} from "../actions/userActions";


function current(state = {}, action) {
  switch (action.type) {
    case "UPDATE_USER_DATA":
      return action.payload
    case "REMOVE_USER_DATA":
    case "GET_USER_DATA":
    case "MERGE_USER_DATA":
    default:
      return state
  }
}

function data(state = {}, action) {
  switch (action.type) {
    case TYPING_CREDENTIALS:
      return action.credentials;
    case SET_USER_DATA_SUCCESS:
      return action.user;
    default:
      return state;
  }
}

function array(state = [], action) {
  switch (action.type) {
    case "ADD_USER":
      return [state, action.user];

    default:
      return state;
  }
}

function object(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({ array, object, data, current });

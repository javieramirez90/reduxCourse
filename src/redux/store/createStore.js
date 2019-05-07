import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducers";
// import initialState from "./initialState";

import thunk from "redux-thunk";

let initialState = {
  users: {
    current:{
      name: "Xavier Ramírez",
      email: "hola@xavierramirez.dev",
      bio: "A darle loco :D !!!",
    },
    object: {},
    array: [],
    data: {
      email: "",
      password: ""
    }
  }
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function() {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}

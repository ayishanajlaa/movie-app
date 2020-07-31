
import { createStore, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import reduxThunkReducer from './components/HomePage/modules/HomePageReducer'
import rootReducer from './reducers/index'


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export  default store


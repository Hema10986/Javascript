import { composeWithDevTools } from "redux-devtools-extension";
import{applyMiddlewer,createStore,combineReducer, combineReducers}from "redux"
import thunk from "redux-thunk";
import { counterReduser } from "./Reduser/Reduser";

const rootReducer = combineReducers({
    account : counterReduser
})

export const Store=createStore(rootReducer,{},composeWithDevTools(applyMiddlewer(thunk)))
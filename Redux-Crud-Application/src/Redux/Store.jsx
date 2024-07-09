import {configureStore,combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import {Reducer} from "./Reducer"
import { applyMiddleware } from "@reduxjs/toolkit";

// const middleware = applyMiddleware();

// const rootreducer = combineReducers({user:Reducer});
// const Store = configureStore({reducer:rootreducer,middleware:[thunk,logger]})
// export default Store;

const Store = configureStore({
    devTools:true,
    reducer:{
        user:Reducer
    },
})

export default Store
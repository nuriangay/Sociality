import { combineReducers } from "@reduxjs/toolkit";

//import reducers
import  dataReducer  from "./slice/slice";

const reducers=combineReducers({
    data:dataReducer

})
export default reducers
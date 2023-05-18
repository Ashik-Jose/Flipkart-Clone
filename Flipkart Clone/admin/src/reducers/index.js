import authReducers from "./auth.reducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({ auth: authReducers });

export default rootReducers;
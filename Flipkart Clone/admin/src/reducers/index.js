import authReducers from "./auth.reducers";
import { combineReducers } from "redux";
import userReducer from "./user.reducer";

const rootReducers = combineReducers({ auth: authReducers,user: userReducer});

export default rootReducers;
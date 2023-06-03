import authReducers from "./auth.reducers";
import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import categoryReducer from "./category.reducer";

const rootReducers = combineReducers({
  auth: authReducers,
  user: userReducer,
  category: categoryReducer,
});

export default rootReducers;

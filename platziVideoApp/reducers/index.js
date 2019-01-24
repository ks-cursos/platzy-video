import {combineReducers} from "redux";
import nav from "./navigator";
import videos from "./videos";
import user from "./user";
const reducer=combineReducers({
    nav,videos,user
});
export default reducer;
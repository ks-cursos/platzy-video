import {combineReducers} from "redux";
import nav from "./navigator";
import videos from "./videos";
const reducer=combineReducers({
    nav,videos
});
export default reducer;
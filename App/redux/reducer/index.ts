import { combineReducers } from "redux";
import User from "./User";
import Cart from './Cart';
import Podcast from "./Podcast";
import Learning from "./Learning";
import Social from "./Social";
export default combineReducers({
    User,
    Cart,
    Podcast,
    Learning,
    Social
})
import { legacy_createStore } from "redux";
import { combineReducers} from "redux";
import { counterReducer } from "../counter/reducer";
import { todoReducer } from "../todo/reducer";
const rootReducer=combineReducers({
    counterReducer,
    todoReducer
})
export const store=legacy_createStore(rootReducer)
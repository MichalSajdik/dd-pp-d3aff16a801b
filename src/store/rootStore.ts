import {combineReducers, createStore} from "redux";
import {itemsReducer} from "./items/ItemsReducer";


export const rootReducer = combineReducers({itemsReducer});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
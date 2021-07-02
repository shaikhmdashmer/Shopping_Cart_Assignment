import { createStore, combineReducers } from "redux";

export const configureStore = ()=>{
    const store = createStore(
        combineReducers({
           
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
    };
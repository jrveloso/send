import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";

//slices

const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-",
    // whitelist: [], user we want to persist
    //blacklist: [],
}

const rootReducer = combineReducers({
    app: appReducer,
});


export {rootPersistConfig, rootReducer}
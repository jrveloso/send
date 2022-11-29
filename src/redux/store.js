//makes the code we write easier to understand
import {configureStore} from "@reduxjs/toolkit";
//as keyword can rename imports
import {useDispatch as useAppDispatch, useSelector as useAppSelector} from "react-redux";
//Allows the data to persist if window is closed
import {persistStore, persistReducer} from "redux-persist";

//will contain information
const store = configureStore({
    reducer: persistReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializeableCheck: false,
        immutableCheck: false,
    
    }),
});

const persistor = persistStore(store);

const {dispatch} = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();


export {store, persistor, dispatch, useSelector, useDispatch}
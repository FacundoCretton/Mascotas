import {combineReducers, configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore'; 

import categoriesReducer from "./categories/categoriesSlice";


const reducers = combineReducers(
    {
        categories: categoriesReducer,





    }
)

const persistConfig = {
    key: 'root',
    storage,
    // whitelist
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),



});

export const persistor = persistStore(store)
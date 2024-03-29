import {combineReducers, configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore'; 

import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import specificationsReducer from "./products/productSpecificationsSlice";
import cartReducer from "./cart/cartSlide"



const reducers = combineReducers(
    {
        categories: categoriesReducer,  
        products: productsReducer,
        specifications: specificationsReducer,
        cart: cartReducer,

    }
)

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
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

// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./features/cart/cartSlice";

// export const createStore = () => {
//     return configureStore({
//     reducer: {
//         cart: cartReducer,
//     },
// })
// }

// export type AppStore = ReturnType<typeof createStore>

// export type RootState = ReturnType<AppStore['getState']>

// export type AppDispatch = AppStore['dispatch']

// ?----------------------------------------------------------------

// store.ts
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import cartReducer from './features/cart/cartSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'], // Specify which reducers to persist
};

const rootReducer = combineReducers({
    cart: cartReducer,
    // other reducers...
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const createStore = () => {
    const store = configureStore({
        reducer: persistedReducer,
    });

    const persistor = persistStore(store);
    return { store, persistor };
}

export type AppStore = ReturnType<typeof createStore>['store'];
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

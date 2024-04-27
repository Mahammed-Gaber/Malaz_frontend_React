import { configureStore } from '@reduxjs/toolkit';
import placeReducer from './slices/placeSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
    reducer : {
        placeReducer,
        authReducer,
    }
})

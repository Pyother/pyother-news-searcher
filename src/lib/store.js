import { configureStore } from '@reduxjs/toolkit'

// * Reducers:
import NewsDataReducer from './features/dataFeatures/NewsDataSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            newsData: NewsDataReducer
        }
    })
}
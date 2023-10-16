import {configureStore} from "@reduxjs/toolkit";
import {postsApi} from './posts/postsApi.js'

export const store  = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
    devTools: true,
})
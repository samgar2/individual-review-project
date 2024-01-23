import { configureStore } from "@reduxjs/toolkit"
import { janeAustenApi } from "../api/janeAustenApi"

//Configure redux store
export const store = configureStore({
reducer: {
    //Set the reducer for my janeAustenApi
    [janeAustenApi.reducerPath]: janeAustenApi.reducer
},

middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(janeAustenApi.middleware) //Add custom middleware
})
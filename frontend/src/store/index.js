import {configureStore} from "@reduxjs/toolkit";
import weatherSlice from "./weather/weatherSlice";
export default configureStore({
    reducer:{
        weatherSlice: weatherSlice
    }
})
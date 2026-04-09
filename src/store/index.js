import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../pages/HomeTemplate/Home/bannerSlice";
import movieReducer from "../pages/HomeTemplate/Home/movieSlice";

const store = configureStore({
    reducer: {
        bannerReducer,
        movieReducer,
    },
});

export default store;

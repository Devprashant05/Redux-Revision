//BASIC COUNTER APP
// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./reducers/counterSlice";

// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
// });

//Projet
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserReducer";

export const store = configureStore({
    reducer: {
        UserReducer: UserReducer,
    },
});

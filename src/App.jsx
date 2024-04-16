// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     increment,
//     decrement,
//     incrementAsync,
// } from "./store/reducers/counterSlice";

// function App() {
//     const { value } = useSelector((state) => state.counter);
//     const dispatch = useDispatch();
//     const incrementCounter = () => {
//         dispatch(increment());
//     };
//     const decrementCounter = () => {
//         dispatch(decrement());
//     };
//     const incrementby5 = () => {
//         dispatch(incrementAsync(10));
//     };
//     // console.log(value);
//     return (
//         <div className="container m-auto p-6 mt-5 bg-red-100">
//             <h1 className="text-center text-3xl font-bold font-mono text-red-900">
//                 Counter: {value}
//             </h1>
//             <div className="text-center mt-5">
//                 <button
//                     onClick={incrementCounter}
//                     className="border-2 border-amber-950 rounded text-white bg-amber-500 hover:bg-amber-600 px-4 py-1 "
//                 >
//                     Increment
//                 </button>
//                 <button
//                     onClick={decrementCounter}
//                     className="mx-3 border-2 border-amber-950 rounded text-white bg-amber-500 hover:bg-amber-600 px-4 py-1 "
//                 >
//                     Decrement
//                 </button>
//                 <button
//                     onClick={incrementby5}
//                     className="border-2 border-amber-950 rounded text-white bg-amber-500 hover:bg-amber-600 px-4 py-1 "
//                 >
//                     Increment By 5
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default App;

import React, { useState } from "react";
import Users from "./components/Users";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <div className="w-screen h-fit pb-5">
                <Navbar />
                <Outlet />
            </div>
        </>
    );
}

export default App;

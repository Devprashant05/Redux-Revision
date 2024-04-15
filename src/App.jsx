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
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./store/reducers/UserReducer";

function App() {
    const { users } = useSelector((state) => state.UserReducer);
    const dispatch = useDispatch();

    const deleteHandler = (index) => {
        dispatch(deleteUser(index));
    };

    return (
        <div className="m-auto container p-8 mt-5 bg-red-100">
            <h1 className="font-mono text-center text-3xl font-bold text-red-900">
                User List
            </h1>
            <ul className="mt-5">
                {users.map((user, index) => {
                    return (
                        <li
                            className="p-3 bg-red-300 text-white hover:text-black w-1/2 text-center mb-2 rounded flex items-center justify-between"
                            key={index}
                        >
                            {user.name}
                            <span
                                onClick={() => deleteHandler(user.index)}
                                className="text-white p-2 rounded bg-red-500 hover:bg-red-800 cursor-pointer"
                            >
                                X
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;

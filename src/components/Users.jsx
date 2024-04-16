import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/reducers/UserReducer";

function Users() {
    const { users } = useSelector((state) => state.UserReducer);
    const dispatch = useDispatch();

    const deleteHandler = (index) => {
        dispatch(deleteUser(index));
    };

    return (
        <div className="m-auto container p-8 mt-5 shadow-md bg-zinc-100">
            <h1 className="font-mono text-center text-3xl font-bold">
                User List
            </h1>
            <ul className="mt-5">
                {users.map((user, index) => {
                    return (
                        <li
                            className="p-3 bg-zinc-300 text-black hover:text-red-500 w-1/2 text-center mb-2 rounded flex items-center justify-between"
                            key={index}
                        >
                            {user.name}
                            <span
                                onClick={() => deleteHandler(index)}
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

export default Users;

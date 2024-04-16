import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-zinc-100 shadow-md p-5 flex items-center justify-center gap-5 text-lg font-mono">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/products">Products</Link>
        </nav>
    );
}

export default Navbar;

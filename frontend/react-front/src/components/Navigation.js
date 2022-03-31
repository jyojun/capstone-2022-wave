import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => 
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <ul className="collapse navbar-collapse mt-2">
        <li>
            <Link className="navbar-brand" to="/">Home</Link>
        </li>
        <li className="ms-2">
            <Link to="/board">Board</Link>
        </li>
        <li className="ms-2">
            <Link to="/login">Login</Link>
        </li>
        <li className="ms-2">
            <Link to="/register">Register</Link>
        </li>
    </ul>
</nav>

export default Navigation;
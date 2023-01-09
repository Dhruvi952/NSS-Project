import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const NavLogin=()=>{
    const auth = localStorage.getItem('login');
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        Navigate("/login");
    }
    return(
        <div>
           <ul className="nav-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/students">Students</Link></li>
                
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/officierprofile">Profile</Link></li>
                <li><Link onClick={logout} to="/login">Logout({JSON.parse(auth).fullname})</Link></li>
               </ul>
        </div>

    )
}

export default NavLogin;
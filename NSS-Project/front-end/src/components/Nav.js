import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Nav=()=>{
    const auth = localStorage.getItem('login');
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        Navigate("/login");
    }
    return(
        <div>

           { auth ?  <ul className="nav-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/studentlist">StudentList</Link></li>
                <li><Link to="/officierlist">Officiers</Link></li>
                <li><Link to="/eventlist">Events</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/login">Logout({JSON.parse(auth).fullname})</Link></li>
                <li><Link to="/dashboard"></Link></li>
                <li><Link to="/updateevent"></Link></li>
                <li><Link to="/event"></Link></li>
                <li><Link to="/signup"></Link></li>
                <li><Link to="/officierregister"></Link></li>
               </ul>
               :
               <ul className="nav-ul nav-right">
                    <li><Link to="/login">Login</Link></li>
            </ul>
            }
        </div>

    )
}

export default Nav;
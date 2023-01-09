import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Dashboard=()=>{
    const auth = localStorage.getItem('login');
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        Navigate("/login");
    }
    return(
        <div>
            <img alt="logo"
            className='logo'
            src='https://seeklogo.com/images/N/nair-service-scheme-logo-FA829FD6C9-seeklogo.com.png' />
           { auth ?  <ul className="nav-ul">
                <li><Link to="/">Home</Link></li>
                
                <li><Link to="/officierlist">Officier's Detail</Link></li>
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

export default Dashboard;
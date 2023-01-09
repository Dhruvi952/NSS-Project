import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const CommonNav = () => {
    const auth = localStorage.getItem('login');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        Navigate("/login");
    }
    return (
        <div>
            <img alt="logo"
                className='logo'
                src='https://seeklogo.com/images/N/nair-service-scheme-logo-FA829FD6C9-seeklogo.com.png' />
            {auth ?
                <>
                </>
                :
                <>
                <ul className="nav-ul nav-right">
                    <li><Link to="/login">Login</Link></li>
                </ul>
                </>
            }
        </div>

    )
}

export default CommonNav;
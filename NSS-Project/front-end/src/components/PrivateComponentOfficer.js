import React from "react";
import {Navigate, Outlet} from 'react-router-dom';
import NavLogin from './NavLogin';

const PrivateComponent=()=>{
    const auth=localStorage.getItem('token');
    return auth?<><NavLogin /><Outlet /></>:<Navigate to="/login" />

}

export default PrivateComponent
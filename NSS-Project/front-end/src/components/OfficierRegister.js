import React,{useState,useEffect} from "react";
import {Navigate, useNavigate} from 'react-router-dom';

const OfficierRegister =()=>{
    const [fullname,setFullname]=useState("");
    const [department,setDepartment]=useState("");
    const [designation,setDesignation]=useState("");
    const [gender,setGendero]=useState("");
    const [emailid,setEmailid]=useState("");
    const [contactno,setContact]=useState("");
    const [whatsappno,setWhatsapp]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");

    const handleGender=(e)=>{
        console.warn(e.target.value)
        setGendero(e.target.value)
    }
    const navigate = useNavigate();

    const collectOfficierData=async ()=>{
        console.warn(!fullname);
        if(!fullname || !department || !designation || !gender || !emailid || !contactno || !whatsappno || !password)
        {
            setError(true)
            return false;
        }
        console.warn(fullname,department,designation,gender,emailid,contactno,whatsappno,password);
        let result1 = await fetch('http://localhost:5000/officerregister', {
            method:'post',
            body: JSON.stringify({fullname,department,designation,gender,emailid,contactno,whatsappno,password}),
            headers:{
                'Content-Type':'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result1 = await result1.json();
        console.warn(result1);
        localStorage.setItem("user",JSON.stringify(result1));
        navigate('/officierlist');
    }
    return(
        <div className="register">
            <h1>Add Program Officer Here</h1>
            <label  className="form-label">Full Name:</label><br></br>
            <input className="inputBox" type="text" placeholder="Enter Full Name" value={fullname} onChange={(e)=>setFullname(e.target.value)} />
            { error && !fullname && <span className="invalid-input">Enter Fullname</span>}

            <label  className="form-label">Department Name:</label><br></br>
            <input className="inputBox" type="text" placeholder="Enter Department Name" value={department} onChange={(e)=>setDepartment(e.target.value)} />
            { error && !department && <span className="invalid-input">Enter valid Department name</span>}

            <label  className="form-label">Designation:</label><br></br>
            <input className="inputBox" type="text" placeholder="Enter Designation" value={designation} onChange={(e)=>setDesignation(e.target.value)} />
            { error && !designation && <span className="invalid-input">Enter valid Designation</span>}

            <label className="form-label">Gender:</label><br></br>
                <input type="radio" id="radio-2" name="gender" value="M" checked={gender==="M"}  onChange={handleGender} />
                <label  className="radio-label">Male</label><br></br>
                <input type="radio" id="radio-3" name="gender" value="F" checked={gender==="F"} onChange={handleGender} />
                <label className="radio-label">Female</label><br></br>
                { error && !gender && <span className="invalid-input">Select gender</span>}

            <label  className="form-label">Email Address:</label><br></br>
            <input className="inputBox" type="email" placeholder="Enter Email Address" value={emailid} onChange={(e)=>setEmailid(e.target.value)} />
            { error && !emailid && <span className="invalid-input">Enter valid emailid</span>}

            <label  className="form-label">Contact Number:</label><br></br>
            <input className="inputBox" type="text" placeholder="Enter Contact Number" value={contactno} onChange={(e)=>setContact(e.target.value)} />
            { error && !contactno && <span className="invalid-input">Enter contactno</span>}

            <label  className="form-label">WhatsApp Number:</label><br></br>
            <input className="inputBox" type="text" placeholder="Enter Whatsapp Number" value={whatsappno} onChange={(e)=>setWhatsapp(e.target.value)} />
            { error && !whatsappno && <span className="invalid-input">Enter whatsAppno</span>}

            <label  className="form-label">Password:</label><br></br>
            <input className="inputBox" type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            { error && !password && <span className="invalid-input">Enter valid password</span>}

            <button onClick={collectOfficierData} type="button" className="appButton">Add Officier</button>
        </div>
    )
}

export default OfficierRegister;
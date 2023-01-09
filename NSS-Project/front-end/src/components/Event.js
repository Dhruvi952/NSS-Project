import React,{useState,useEffect} from "react";
import {Navigate, useNavigate} from 'react-router-dom';

const EventRegister =()=>{
    const [eventname,setEventname]=React.useState("");
    const [startdatetime,setStart]=React.useState("");
    const [enddatetime,setEnd]=React.useState("");
    const [venue,setVenue]=React.useState("");
    const [description,setDescription]=React.useState("");
    const [entryby,setEntryby]=React.useState("");
    const [error,setError]=React.useState(false);
    const navigate = useNavigate();
    const collectEventdata=async ()=>{
        console.warn(!eventname);
        if(!eventname || !startdatetime || !enddatetime || !venue || !description || !entryby)
        {
            setError(true)
            return false;
        }
        console.warn(eventname,startdatetime,enddatetime,venue,description,entryby);
        let result = await fetch('http://localhost:5000/addevent', {
            method:'post',
            body: JSON.stringify({eventname,startdatetime,enddatetime,venue,description,entryby}),
            headers:{
                'Content-Type':'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("event",JSON.stringify(result));
        navigate('/events');
    }
    return(
        <div className="register">
            <h1>Event Creation Here</h1>
            <label  className="form-label">Event Name:</label><br></br>
            <input className="inputBox" type="text" placeholder="Enter Event Name" value={eventname} onChange={(e)=>setEventname(e.target.value)} />
            { error && !eventname && <span className="invalid-input">Enter valid eventname</span>}
            
            <label  className="form-label">Starting DateTime:</label><br></br>
            <input className="inputBox" type="datetime-local" placeholder="Enter Date " value={startdatetime} onChange={(e)=>setStart(e.target.value)} />
            { error && !startdatetime && <span className="invalid-input">Select Date and Time</span>}

            <label  className="form-label">Ending DateTime:</label><br></br>
            <input className="inputBox" type="datetime-local" placeholder="Enter Date " value={enddatetime} onChange={(e)=>setEnd(e.target.value)} />
            { error && !enddatetime && <span className="invalid-input">Select Date and Time</span>}

            <label  className="form-label">Venue:</label><br></br>
            <input className="inputBox" type="text" placeholder="Enter Venue" value={venue} onChange={(e)=>setVenue(e.target.value)} />
            { error && !venue && <span className="invalid-input">Enter valid venue</span>}

            <label  className="form-label">Description:</label><br></br>
            <textarea  className="inputBox" name="landmark" rows="3" cols="50" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Eg. POST OFFICE, TEMPLE Etc.">
            </textarea>
            { error && !description && <span className="invalid-input">Enter Description</span>}

            <label  className="form-label">Entry By:</label><br></br>
            <input className="inputBox" type="email" placeholder="Enter Officier Email id" value={entryby} onChange={(e)=>setEntryby(e.target.value)} />
            { error && !entryby && <span className="invalid-input">Enter valid officier id</span>}

            <button onClick={collectEventdata} type="button" className="appButton">Create Event</button>
        </div>
    )
}

export default EventRegister;
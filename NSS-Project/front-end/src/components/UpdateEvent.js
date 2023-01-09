import React,{useState,useEffect} from "react";
import {Navigate, useNavigate, useParams} from 'react-router-dom';

const EventUpdation =()=>{
    const [eventname,setEventname]=React.useState("");
    const [startdatetime,setStart]=React.useState("");
    const [enddatetime,setEnd]=React.useState("");
    const [venue,setVenue]=React.useState("");
    const [description,setDescription]=React.useState("");
    const [entryby,setEntryby]=React.useState("");

    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        getEventDetails();

    },[])
    const getEventDetails = async ()=>{
        let result = await fetch(`http://localhost:5000/event/${params.id}`, {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
            });
        result = await result.json();
        setEventname(result.eventname)
        setStart(result.startdatetime)
        setEnd(result.enddatetime)
        setVenue(result.venue)
        setDescription(result.description)
        setEntryby(result.entryby)
    }
    const updateEventData=async ()=>{
        
        console.warn(eventname,startdatetime,enddatetime,venue,description,entryby);
        let result = await fetch(`http://localhost:5000/event/${params.id}`,{
            method:'Put',
            body:JSON.stringify({eventname,startdatetime,enddatetime,venue,description,entryby}),
            headers:{
                'Content-Type':"application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result= await result.json()
        console.warn(result)
        navigate("/eventlist")
    }
    return(
        <div className="register">
            <h1>Event Updation Here</h1>
            <label  className="text-light">Event Name:</label><br></br>
            <input className="inputBox" type="text" placeholder="Enter Event Name" value={eventname} onChange={(e)=>setEventname(e.target.value)} />
            
            <label  className="text-light">Starting DateTime:</label><br></br>
            <input className="inputBox" type="datetime-local" placeholder="Enter Date " value={startdatetime} onChange={(e)=>setStart(e.target.value)} />

            <label  className="text-light">Ending DateTime:</label><br></br>
            <input className="inputBox" type="datetime-local" placeholder="Enter Date " value={enddatetime} onChange={(e)=>setEnd(e.target.value)} />

            <label  className="text-light">Venue:</label><br></br>
            <input className="inputBox" type="text" placeholder="Enter Venue" value={venue} onChange={(e)=>setVenue(e.target.value)} />

            <label  className="text-light">Description:</label><br></br>
            <textarea  className="inputBox" name="landmark" rows="3" cols="50" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Eg. POST OFFICE, TEMPLE Etc.">
            </textarea>

            <label  className="text-light">Entry By:</label><br></br>
            <input className="inputBox" type="email" placeholder="Enter Officier Email id" value={entryby} onChange={(e)=>setEntryby(e.target.value)} />

            <button onClick={updateEventData} type="button" className="appButton">Update Event</button>
        </div>
    )
}

export default EventUpdation;
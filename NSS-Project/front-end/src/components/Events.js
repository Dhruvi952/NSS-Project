import React,{useState,useEffect} from "react";
import {Link, Navigate, useNavigate} from 'react-router-dom';

const Events =()=>{
    const [events,setEvents] = useState([]);
    useEffect(()=>{
        getEvents();
    },[])
    const getEvents= async()=>{
        let result = await fetch('http://localhost:5000/event', {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
            });
        result = await result.json();
        setEvents(result);
    }
    console.warn("Events",events);
    const deleteEvent =async (id)=>{
        let result= await fetch(`http://localhost:5000/event/${id}`, {
            method:"Delete",
            headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
        });
        result= await result.json()
        if(result)
        {
            alert('Event cancelled')
            getEvents();
        }
   }
   const searchHandle = async (event) =>{
    console.warn(event.target.value)
    let key = event.target.value;
    if(key){
        let result= await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    if(result)
    {
        setEvents(result)
    }
    }
    else{
        getEvents()
    }
   }
    return(
        <div className="event-list">
            <button className="eventbutton"><Link to="/event">Create Event</Link></button><br></br>
            <h1>Event List</h1>
            <input className="searchbox" type="text" placeholder="Search here"
            onChange={searchHandle}
            /><br></br>
            <input className="searchbox" type="datetime-local" onChange={searchHandle} />
            <ul>
                <li>S. No</li>
                <li>EventName</li>
                <li>Start</li>
                <li>End</li>
                <li>Venue</li>
                <li>Description</li>
                <li>Entry By</li>
                <li>Operation</li>
            </ul>
            {
              events.length>0 ? events.map((item,index)=>
                <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.eventname}</li>
                <li>{item.startdatetime}</li>
                <li>{item.enddatetime}</li>
                <li>{item.venue}</li>
                <li>{item.description}</li>
                <li>{item.entryby}</li>
                <li><button onClick={()=>deleteEvent(item._id)}>Delete</button>
                <button><Link to={"/updateevent/"+item._id}>Update</Link></button></li>

            </ul>
                )
                : <h1> No Result Found</h1>
            }
        </div>
    )
}

export default Events;
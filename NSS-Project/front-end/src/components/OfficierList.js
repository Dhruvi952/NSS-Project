import React,{useState,useEffect} from "react";
import {Link, Navigate, useNavigate} from 'react-router-dom';

const OfficierList =()=>{
    const [officier,setOfficier] = useState([]);
    useEffect(()=>{
        getOfficier();
    },[])
    const getOfficier= async()=>{
        let result = await fetch('http://localhost:5000/officier', {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
            });
        result = await result.json();
        setOfficier(result)
    }
    console.warn("Officier",officier);
    const deleteOfficier =async (id)=>{
        let result= await fetch(`http://localhost:5000/officier/${id}`,{
            method:"Delete",
            headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
        });
        result= await result.json()
        if(result)
        {
            alert('Officier deleted')
            getOfficier();
        }
   }
   const searchHandle = async (event) =>{
    console.warn(event.target.value)
    let key = event.target.value;
    if(key){
        let result= await fetch(`http://localhost:5000/searchofficier/${key}`);
    result = await result.json();
    if(result)
    {
        setOfficier(result)
    }
    }
    else{
        getOfficier()
    }
   }
   return(
    <div className="student-list">
        <button className="eventbutton"><Link to="/officierregister">Add New Officier</Link></button><br></br>
        <h1>Officier List</h1>
        <input className="searchbox" type="text" placeholder="Search here"
            onChange={searchHandle}
            />
        <ul>
            <li>S. No</li>
            <li>Name</li>
            <li>Department</li>
            <li>Designation</li>
            <li>Gender</li>
            <li>EmailId</li>
            <li>Contact no.</li>
            <li>Whatsapp no.</li>
            <li>Operation</li>
        </ul>
        {
            officier.length>0 ?officier.map((item,index)=>
            <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.fullname}</li>
            <li>{item.department}</li>
            <li>{item.designation}</li>
            <li>{item.gender}</li>
            <li>{item.emailid}</li>
            <li>{item.contactno}</li>
            <li>{item.whatsappno}</li>
            <li><button onClick={()=>deleteOfficier(item._id)}>Delete</button></li>

        </ul>
            )
            : <h1>No Officier Found</h1>
        }
    </div>
)
}

export default OfficierList;
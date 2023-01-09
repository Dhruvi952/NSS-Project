import React,{useState,useEffect} from "react";
import {Link, Navigate, useNavigate} from 'react-router-dom';

const StudentList =()=>{
    const [student,setStudent] = useState([]);
    useEffect(()=>{
        getStudent();
    },[])
    const getStudent= async()=>{
        let result = await fetch('http://localhost:5000/student', {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setStudent(result)
    }
    console.warn("Students",student);
    const deleteStudent =async (id)=>{
        let result= await fetch(`http://localhost:5000/student/${id}`,{
            method:"Delete",
            headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result= await result.json()
        if(result)
        {
            alert('Student delete')
            getStudent();
        }
   }
   const searchHandle = async (event) =>{
    console.warn(event.target.value)
    let key = event.target.value;
    if(key){
        let result= await fetch(`http://localhost:5000/searchstudent/${key}`);
    result = await result.json();
    if(result)
    {
        setStudent(result)
    }
    }
    else{
        getStudent()
    }
   }
   return(
    <div className="student-list">
        {/* <button className="eventbutton"><Link to="/signup">Add Student</Link></button><br></br> */}
        <h1>Student List</h1>
        <input className="searchbox" type="text" placeholder="Search here"
            onChange={searchHandle}
            />
        <ul>
            <li>S. No</li>
            <li>Email</li>
            <li>Name</li>
            <li>EnrollmentNumber</li>
            <li>Gender</li>
            <li>Institute</li>
            <li>Couse</li>
            <li>Sem</li>
            {/* <li>Operation</li> */}
        </ul>
        {
           student.length>0 ? student.map((item,index)=>
            <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.email}</li>
            <li>{item.name}</li>
            <li>{item.number}</li>
            <li>{item.gender}</li>
            <li>{item.institute}</li>
            <li>{item.course}</li>
            <li>{item.sem}</li>
            {/* <li><button onClick={()=>deleteStudent(item._id)}>Delete</button></li> */}

        </ul>
            )
            : <h1>No Student Found</h1>
        }
    </div>
)
}

export default StudentList;
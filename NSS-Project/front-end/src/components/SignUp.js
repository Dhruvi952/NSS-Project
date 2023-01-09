import React,{useState,useEffect} from "react";
import {Navigate, useNavigate} from 'react-router-dom';

const SignUp =()=>{
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [fname,setFName]=useState("");
    const [mname,setMName]=useState("");
    const [number,setNumber]=useState("");
    const [gender,setGender]=useState("");
    const [institute,setIName]=useState("");
    const [course,setCourse]=useState("");
    const [class1,setClass]=useState("");
    const [sem,setSem]=useState("");
    const [bdate,setBdate]=useState("");
    const [address,setAddress]=useState("");
    const [landmark,setLandmark]=useState("");
    const [city,setCity]=useState("");
    const [taluka,setTaluka]=useState("");
    const [district,setDistrict]=useState("");
    const [pincode,setPincode]=useState("");
    const [mno,setMno]=useState("");
    const [wno,setWno]=useState("");
    const [aadhar,setAadhar]=useState("");
    const [bloodgroup,setBlood]=useState("");
    const [fatherno,setFatherNo]=useState("");
    const [motherno,setMotherNo]=useState("");
    const [stay,setStay]=useState("");
    const [upfrom,setFrom]=useState("");
    const [error,setError]=useState("");

    const handleGender=(e)=>{
        console.warn(e.target.value)
        setGender(e.target.value)
    }
    const handleInstitute=(e)=>{
        console.warn(e.target.value)
        setIName(e.target.value)
    }
    const handleCourse=(e)=>{
        console.warn(e.target.value)
        setCourse(e.target.value)
    }
    const handleClass=(e)=>{
        console.warn(e.target.value)
        setClass(e.target.value)
    }
    const handleSem=(e)=>{
        console.warn(e.target.value)
        setSem(e.target.value)
    }
    const handleBlood=(e)=>{
        console.warn(e.target.value)
        setBlood(e.target.value)
    }
    const handleStay=(e)=>{
        console.warn(e.target.value)
        setStay(e.target.value)
    }
    const handleFrom=(e)=>{
        console.warn(e.target.value)
        setFrom(e.target.value)
    }
    const navigate = useNavigate();
    const collectData=async ()=>{
        console.warn(!email);
        if(!email || !name || !fname || !mname || !number || !gender || !institute || !course || !class1 || !sem
            || !bdate || !address || !landmark || !city || !taluka || !district || !pincode || !mno || !wno ||
            !aadhar || !bloodgroup || !fatherno || !motherno || !stay || !upfrom)
        {
            setError(true)
            return false;
        }
        console.warn(email,name,fname,mname,number,gender,institute,course,
            class1,sem,bdate,address,landmark,city,taluka,district,pincode,mno,wno,
            aadhar,bloodgroup,fatherno,motherno,stay,upfrom);
        let result = await fetch('http://localhost:5000/register', {
            method:'post',
            body: JSON.stringify({email,name,fname,mname,number,gender,institute,course,
                class1,sem,bdate,address,landmark,city,taluka,district,pincode,mno,wno,
                aadhar,bloodgroup,fatherno,motherno,stay,upfrom}),
            headers:{
                'Content-Type':'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/students');
    }
    return(
        <div className="register">
            <h1>Add Student Here</h1>
            <label  className="form-label">Email Address:</label>
            <input className="inputBox" type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            { error && !email && <span className="invalid-input">Enter valid email</span>}

            <label  className="form-label">Student Name:</label>
            <input className="inputBox" type="text" placeholder="PATEL Raj ROHANBHAI" value={name} onChange={(e)=>setName(e.target.value)} />
            { error && !name && <span className="invalid-input">Enter valid name</span>}

            <label  className="form-label">Student's Father Name:</label>
            <input className="inputBox" type="text" placeholder="PATEL ROHANBHAI ASHOKBHAI" value={fname} onChange={(e)=>setFName(e.target.value)} />
            { error && !fname && <span className="invalid-input">Enter valid fathername</span>}

            <label  className="form-label">Student's Mother Name:</label>
            <input className="inputBox" type="text" placeholder="PATEL RITABEN ROHANBHAI" value={mname} onChange={(e)=>setMName(e.target.value)} />
            { error && !mname && <span className="invalid-input">Enter valid mothername</span>}

            <label  className="form-label">Enrollment Number:</label>
            <input className="inputBox" type="number" name="enrono" value={number} onChange={(e)=>setNumber(e.target.value)} placeholder="write 14 digit full no." />
            { error && !number && <span className="invalid-input">Enter valid enrollmentno</span>}

            <label className="form-label">Gender:</label><br></br>
                <input type="radio" id="radio-2" name="gender" value="M" checked={gender==="M"}  onChange={handleGender} />
                <label  className="radio-label">Male</label><br></br>
                <input type="radio" id="radio-3" name="gender" value="F" checked={gender==="F"} onChange={handleGender} />
                <label className="radio-label">Female</label><br></br>
                { error && !gender && <span className="invalid-input">Select gender</span>}

                <label  className="form-label">Institute Name:</label><br></br>
                <input type="radio" id="radio-4" name="institute" value="BMIIT" onChange={handleInstitute} />
                <label  className="radio-label">BMIIT</label><br></br>
                <input type="radio" id="radio-5" name="institute" value="B.V.Patel" onChange={handleInstitute} />
                <label  className="radio-label">B.V.Patel</label><br></br>
                <input type="radio" id="radio-6" name="institute" value="SRIMCA" onChange={handleInstitute} />
                <label className="radio-label">SRIMCA</label><br></br>
                { error && !institute && <span className="invalid-input">Select Institute</span>}

                <label className="form-label">Course:</label><br></br>
                <input type="radio" id="radio-7" name="course" value="Integrated MScIT" onChange={handleCourse} />
                <label className="radio-label">Integrated MScIT</label><br></br>
                <input type="radio" id="radio-8" name="course" value="Integrated MCA" onChange={handleCourse} />
                <label className="radio-label">Integrated MCA</label><br></br>
                <input type="radio" id="radio-9" name="course" value="BCA" onChange={handleCourse} />
                <label className="radio-label">BCA</label><br></br>
                { error && !course && <span className="invalid-input">Select course</span>}

                <label className="form-label">Class:</label><br></br>
                <input type="radio" id="radio-10" name="class" value="FY(5 Years Integrated Course)" onChange={handleClass} />
                <label className="radio-label">FY(5 Years Integrated Course)</label><br></br>
                <input type="radio" id="radio-11" name="class" value="SY(5 Years Integrated Course)" onChange={handleClass} />
                <label className="radio-label">SY(5 Years Integrated Course)</label><br></br>
                <input type="radio" id="radio-12" name="class" value="FY MCA(5 Years Integrated Course)" onChange={handleClass} />
                <label className="radio-label">FY MCA(5 Years Integrated Course)</label><br></br>
                <input type="radio" id="radio-13" name="class" value="SY MCA(5 Years Integrated Course)" onChange={handleClass} />
                <label className="radio-label">SY MCA(5 Years Integrated Course)</label><br></br>
                <input type="radio" id="radio-14" name="class" value="FY BCA" onChange={handleClass} />
                <label className="radio-label">FY BCA</label><br></br>
                <input type="radio" id="radio-15" name="class" />
                <label className="radio-label">Other:</label>
                <br></br>  
                { error && !class1 && <span className="invalid-input">Select class</span>}

                <label className="form-label">Semester:</label><br></br>
                <input type="radio" id="radio-16" name="semester" value="1" onChange={handleSem} />
                <label className="radio-label">1</label><br></br>
                <input type="radio" id="radio-17" name="semester" value="3" onChange={handleSem} />
                <label className="radio-label">3</label><br></br>  
                { error && !sem && <span className="invalid-input">Select sem</span>}

                <label className="form-label">Date of Birth:</label>
                <input type="date" className="inputBox" name="bdate" value={bdate} onChange={(e)=>setBdate(e.target.value)} placeholder="Enter Birthdate" />
                { error && !bdate && <span className="invalid-input">Select Birthdate</span>}

                <label className="form-label">Residential Address:</label>
                <textarea id="address" className="inputBox" name="address" rows="4" cols="50" value={address} onChange={(e)=>setAddress(e.target.value)}>
                </textarea> 
                { error && !address && <span className="invalid-input">Enter Address</span>}

                <label className="form-label">Landmark:</label>
                <textarea id="landmark" className="inputBox" name="landmark" rows="2" cols="50" value={landmark} onChange={(e)=>setLandmark(e.target.value)} placeholder="Eg. POST OFFICE, TEMPLE Etc.">
                </textarea>    
                { error && !landmark && <span className="invalid-input">Enter Landmark</span>}

                <label className="form-label">Village/City/Town:</label>
                <input type="text" className="inputBox" name="village" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="Enter Village/City"></input>
                { error && !city && <span className="invalid-input">Enter city</span>}

                <label className="form-label">Taluka:</label>
                <input type="text" className="inputBox" name="taluka" value={taluka} onChange={(e)=>setTaluka(e.target.value)} placeholder="" />
                { error && !taluka && <span className="invalid-input">Enter taluka</span>}

                <label className="form-label">District:</label>
                <input type="text" className="inputBox" name="district" value={district} onChange={(e)=>setDistrict(e.target.value)} placeholder=""></input>
                { error && !district && <span className="invalid-input">Enter district</span>}

                <label className="form-label">Pincode:</label>
                <input type="number" className="inputBox" name="pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)} placeholder="" />
                { error && !pincode && <span className="invalid-input">Enter valid officier id</span>}

                <label className="form-label">Mobile No.:</label>
                <input type="number" className="inputBox" name="mobile" value={mno} onChange={(e)=>setMno(e.target.value)} placeholder="Self-Reachable no." />
                { error && !mno && <span className="invalid-input">Enter mobileno</span>}

                <label className="form-label">whatsApp No.:</label>
                <input type="number" className="inputBox" name="whatsapp" value={wno} onChange={(e)=>setWno(e.target.value)} placeholder="Self-Reachable no." />
                { error && !wno && <span className="invalid-input">Enter whatsapp no</span>}

                <label className="form-label">Student's Aadhar No.:</label>
                <input type="number" className="inputBox" name="aadharno" value={aadhar} onChange={(e)=>setAadhar(e.target.value)} placeholder="" />
                { error && !aadhar && <span className="invalid-input">Enter valid aadharno</span>}

                <label className="form-label">Student's Blood Group:</label><br></br>
                <input type="radio" id="radio-18" name="blood" value="O +ve" onChange={handleBlood} />
                <label className="radio-label">O +ve</label><br></br>
                <input type="radio" id="radio-19" name="blood" value="O -ve" onChange={handleBlood} />
                <label className="radio-label">O -ve</label><br></br>
                <input type="radio" id="radio-20" name="blood" value="A +ve" onChange={handleBlood} />
                <label className="radio-label">A +ve</label><br></br>
                <input type="radio" id="radio-21" name="blood" value="A -ve" onChange={handleBlood}  />
                <label className="radio-label">A -ve</label><br></br>
                <input type="radio" id="radio-22" name="blood" value="B +ve" onChange={handleBlood} />
                <label className="radio-label">B +ve</label><br></br>
                <input type="radio" id="radio-23" name="blood" value="B -ve" onChange={handleBlood}  />
                <label className="radio-label">B -ve</label><br></br>
                <input type="radio" id="radio-24" name="blood" value="AB +ve" onChange={handleBlood}  />
                <label className="radio-label">AB +ve</label><br></br>
                <input type="radio" id="radio-25" name="blood" value="AB -ve" onChange={handleBlood}  />
                <label className="radio-label">AB -ve</label><br></br>
                { error && !bloodgroup && <span className="invalid-input">Select Blood group</span>}

                <label className="form-label">Father's Mobile No.:</label>
                <input type="number" className="inputBox" name="fmobile" value={fatherno} onChange={(e)=>setFatherNo(e.target.value)}  placeholder="" />
                { error && !fatherno && <span className="invalid-input">Enter father mobileno</span>}

                <label className="form-label">Mother's Mobile No.:</label>
                <input type="number" className="inputBox" name="mmobile" value={motherno} onChange={(e)=>setMotherNo(e.target.value)}  placeholder="" />
                { error && !motherno && <span className="invalid-input">Enter mother mobileno</span>}

                <label className="form-label">Staying at College Hostel or PG at Bardoli:</label><br></br>                                  
                <input type="radio" id="radio-26" name="stay" value="Yes" onChange={handleStay}  />
                <label className="radio-label">Yes</label><br></br>     
                <input type="radio" id="radio-27" name="stay" value="No" onChange={handleStay}  />
                <label className="radio-label">No</label><br></br> 
                { error && !stay && <span className="invalid-input">Select option</span>}

                <label className="form-label">Doing Up Down From:</label> <br></br>                                      
                <input type="radio" id="radio-28" name="from" value="Vyara Route" onChange={handleFrom}  />
                <label className="radio-label">Vyara Route</label><br></br>
                                    
                <input type="radio" id="radio-29" name="from" value="Valsad Route" onChange={handleFrom} />
                <label className="radio-label">Valsad Route</label><br></br>
                                        
                <input type="radio" id="radio-30" name="from" value="Songadh/Ukai" onChange={handleFrom} />
                <label className="radio-label">Songadh/Ukai</label><br></br>
                                        
                <input type="radio" id="radio-31" name="from" value="Mahuva/Anaval Route" onChange={handleFrom} />
                <label className="radio-label">Mahuva/Anaval Route</label><br></br>
                                        
                <input type="radio" id="radio-32" name="from" value="Surat" onChange={handleFrom} />
                <label className="radio-label">Surat</label><br></br>
                                        
                <input type="radio" id="radio-33" name="from" value="Palsana Route" onChange={handleFrom} />
                <label className="radio-label">Palsana Route</label><br></br>
                                        
                <input type="radio" id="radio-34" name="from" value="Kamrej Route" onChange={handleFrom} />
                <label className="radio-label">Kamrej Route</label><br></br>
                                        
                <input type="radio" id="radio-35" name="from" value="Navsari" onChange={handleFrom} />
                <label className="radio-label">Navsari</label><br></br>
                                        
                <input type="radio" id="radio-36" name="from" value="Bilimora" onChange={handleFrom} />
                <label className="radio-label">Bilimora</label><br></br>
                                       
                <input type="radio" id="radio-37" name="from" value="Vakaner/Valod/Buhari" onChange={handleFrom} />
                <label className="radio-label">Vakaner/Valod/Buhari</label><br></br>
                                       
                <input type="radio" id="radio-38" name="from" value="Ankleshwar,Kosamba,Bharuch" onChange={handleFrom} />
                <label className="radio-label">Ankleshwar,Kosamba,Bharuch</label><br></br>
                                        
                <input type="radio" id="radio-39" name="from" value="Other" onChange={handleFrom} />
                <label className="radio-label">Other</label><br></br>
                { error && !upfrom && <span className="invalid-input">Select route</span>}

            <button onClick={collectData} type="button" className="appButton">Add Student</button>
        </div>
    )
}

export default SignUp;
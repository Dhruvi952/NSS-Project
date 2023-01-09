import React, { useState, useEffect } from "react";
import { json, Navigate, NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [emailid, setuserid] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("login");
    if (auth) {
      navigate("/");
    }
  }, []);
  const handleLogin = async () => {
    console.warn("Email,password", emailid, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ emailid, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.auth) {
      if (result.login.fullname === "Gajanan Kalyankar") {
        localStorage.setItem("login", JSON.stringify(result.login));
        localStorage.setItem("token", JSON.stringify(result.auth));
        navigate("/");
      } else {
        localStorage.setItem("login", JSON.stringify(result.login));
        localStorage.setItem("token", JSON.stringify(result.auth));
        navigate("/students");
      }
    } else {
      alert("please enter valid userid and password");
    }
  };
  //const navigate = useNavigate();
  //useEffect(()=>{
  //    const auth= localStorage.getItem('login');
  //    if(auth)
  //    {
  //        Navigate('/')
  //    }
  //})
  return (
    <>
      <div className="login">
          <section className="main_heading pt-5">
            <div className="text-center">
              <h4 className="display-5">Login</h4>
              <hr className="w-25 mx-auto" />
            </div>
            <div className="container">
              <div className="row">
                <div className="form_section col-xxl-12 col-10 col-md-6 mx-auto">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">UserId</label>
                      <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Your Email Id" onChange={(e) => setuserid(e.target.value)} value={emailid} />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label" > Password </label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} value={password}  />
                    </div>

                    <button onClick={handleLogin} type="button" className=" btn btn-light" > Signin</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
      
      </div>
    </>
  );
};

export default Login;

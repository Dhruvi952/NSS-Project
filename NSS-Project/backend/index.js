//const { request } = require('express');
const express=require('express');
const cors = require("cors");
require('./db/config');
const User = require("./db/User");
const Officer = require("./db/Officer");
const Event = require("./db/Event");

const Jwt = require('jsonwebtoken');
const jwtKey='nss';

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", verifyToken, async (req,resp)=>{
    let user= new User(req.body);
    let result = await user.save();
    resp.send(result);
})

app.get("/searchstudent/:key", async (req,resp)=>{
    let result= await User.find({
        "$or":[
            {email:{$regex:req.params.key}},
            {name:{$regex:req.params.key}},
            {gender:{$regex:req.params.key}},
            {institute:{$regex:req.params.key}},
            {course:{$regex:req.params.key}},
        ]
    });
    resp.send(result)
})

app.get("/student", verifyToken, async (req,resp)=>{
    let student = await User.find();
    if(student.length>0)
    {
        resp.send(student)
    }else{
        resp.send({result:"No events found"})
    }
})

app.delete("/student/:id", verifyToken, async (req,resp)=>{
    let result = await User.deleteOne({_id: req.params.id});
    resp.send(result);
})

app.post("/officerregister", verifyToken, async (req,resp)=>{
    let officer= new Officer(req.body);
    let result1 = await officer.save();
    resp.send(result1);
})

app.get("/officier", verifyToken, async (req,resp)=>{
    let officer = await Officer.find();
    if(officer.length>0)
    {
        resp.send(officer)
    }else{
        resp.send({result:"No events found"})
    }
})

app.delete("/officier/:id", verifyToken, async (req,resp)=>{
    let result = await Officer.deleteOne({_id:req.params.id});
    resp.send(result);
})

app.get("/searchofficier/:key", async (req,resp)=>{
    let result= await Officer.find({
        "$or":[
            {fullname:{$regex:req.params.key}},
            {department:{$regex:req.params.key}},
            {gender:{$regex:req.params.key}},
            {emailid:{$regex:req.params.key}}
        ]
    });
    resp.send(result)
})

app.post("/addevent", verifyToken, async (req,resp)=>{
    let event= new Event(req.body);
    let result = await event.save();
    resp.send(result);
})
app.post("/login", async (req,resp)=>{
    console.log(req.body)
    if(req.body.password && req.body.emailid)
    {
        let login= await Officer.findOne(req.body).select("-password");
        if(login)
        {
            Jwt.sign({ login }, jwtKey , { expiresIn: "2h" }, (err,token)=>{
                if(err){
                    resp.send({ result: "Something went wrong, Please try after some time"});
                }
                resp.send({login, auth: token});
            })
            
        }
        else
        {
            resp.send({result: 'No User Found'})
        }
    }
    else
    {
        resp.send({result: 'No User Found'})
    }
})

app.get("/event", verifyToken, async (req,resp)=>{
    let events = await Event.find();
    if(events.length>0)
    {
        resp.send(events)
    }else{
        resp.send({result:"No events found"})
    }
})

app.delete("/event/:id", verifyToken, async (req,resp)=>{
    let result = await Event.deleteOne({_id:req.params.id});
    resp.send(result);
})
    
app.get("/event/:id", verifyToken, async (req,resp)=>{
    let result = await Event.findOne({_id:req.params.id});
    if(result){
        resp.send(result)
    }
    else{
        resp.send({result:"No Record Found."})
    }
})

app.put("/event/:id", verifyToken, async (req,resp)=>{
    let result = await Event.updateOne(
        {_id: req.params.id},
        {
            $set : req.body
        }
    )
    resp.send(result)
})

app.get("/search/:key", async (req,resp)=>{
    let result= await Event.find({
        "$or":[
            {eventname:{$regex:req.params.key}},
            {startdatetime:{$regex:req.params.key}},
            {venue:{$regex:req.params.key}},
            {entryby:{$regex:req.params.key}}
        ]
    });
    resp.send(result)
})

function verifyToken(req, resp, next){
    let token = req.headers['authorization']
    if(token){
        token = token.split(' ')[1];
        //console.warn("middleware called if",token)
        Jwt.verify(token, jwtKey, (err, valid)=>{
            if(err){
                resp.status(401).send({result: "Please provide valid token"})
            }else{
                next()
            }
        })
    }else{
        resp.status(403).send({result: "Please add token with header"})
    }
    //console.warn("middleware called",token)
    
}

app.listen(5000)
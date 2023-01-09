const mongoose=require('mongoose');
const officerSchema = new mongoose.Schema({
    fullname:String,
    department:String,
    designation:String,
    gender:String,
    emailid:String,
    contactno:Number,
    whatsappno:Number,
    password:String
})

module.exports = mongoose.model("Tbl_Officier",officerSchema);
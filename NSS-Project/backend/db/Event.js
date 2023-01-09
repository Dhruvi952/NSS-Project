const mongoose=require('mongoose');
const eventSchema = new mongoose.Schema({
    eventname:String,
    startdatetime:String,
    enddatetime:String,
    venue:String,
    description:String,
    entryby:String
})

module.exports = mongoose.model("Tbl_Event",eventSchema);

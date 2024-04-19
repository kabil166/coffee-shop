const mongoose= require("mongoose");

const note = new mongoose.Schema({
    description:{
        type:String,
        required:true,
    }
})
mongoose.models = {}
export default  mongoose.model('Note', note);
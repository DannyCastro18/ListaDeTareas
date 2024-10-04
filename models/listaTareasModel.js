let mongoose = require('mongoose');

const TareaSchema = new  mongoose.Schema({
    titulo: {
        type:String,
        required:true
    }, 
    estado:{
        type:Boolean,
        required:true
    }
})

const tarea = mongoose.model('tarea',TareaSchema)
module.exports = tarea;
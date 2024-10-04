let mongoose = require('mongoose');

const TareaSchema = new  mongoose.Schema({
    titulo: {
        type:String,
        required:true
    }, 
    descripcion:{
        type:String,
        required:true
    },
    estado:{
        type:String,
        required:true
    }
})

const tarea = mongoose.model('tareas',TareaSchema)
module.exports = tarea;
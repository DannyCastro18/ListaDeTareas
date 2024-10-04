const mongoose = require('mongoose')

const conexionDB = async () => {
    try{
        mongoose.connect(process.env.DB_MONGO);
        console.log("Conexión exitosa a la base de datos de Lista de Tareas")
    }catch(e){
        console.log("Error al establecer conexión a la base de datos de Lista de Tareas")
    }
}

module.exports = conexionDB;
const ListaTareas = require("../models/listaTareasModel");

const obtenerTareas = async (req, res)=> {
    try{
        const tareas = await ListaTareas.find();
        res.json(tareas)
    }catch(e){
        res.json({Mensaje: "Error al obtener datos"})
    }
}

const crearTarea = async (req,res) =>{
    try{
        const {titulo, estado} = req.body;
        const nueva = new ListaTareas ({titulo, estado});
        await nueva.save();
        res.json({Mensaje: nueva})
    }catch(e){
        res.json({Error: e})
    }
}

const actualizarTarea = async (req,res) =>{
    try{
        let {id} = req.params;
        let {titulo, estado} = req.body
        if(!titulo || !estado){
            return res.json({Mensaje: "Es necesario llenar todos los campos"})
        }else{
            let actualizacion = await ListaTareas.findByIdAndUpdate(id, {titulo,estado})
            return res.json({Mensaje: "Tarea actualizada exitosamente", actualizacion})
        }
    }catch(e){
        res.json({Mensaje: "Error al actualizar tarea"})
    }
}

const eliminarTarea = async (req,res) => {
    const {id} = req.params;
    let tareaEliminada = await ListaTareas.findByIdAndDelete(id)
    if(!tareaEliminada){
        return res.json({Mensaje: "Tarea no encontrada en la Lista de Tareas"})
    }else{
        res.json({Mensaje: "Tarea eliminada exitosamente ", tareaEliminada})
    }
}

module.exports = {obtenerTareas, crearTarea, actualizarTarea, eliminarTarea}
const express = require('express');
const router = express.Router();
const listaTareas = require('../controllers/listaTareasController')

router.get('/tarea', listaTareas.obtenerTareas)
router.post('/tarea', listaTareas.crearTarea)
router.put('/tarea', listaTareas.actualizarTarea)
router.delete('/tarea', listaTareas.eliminarTarea)

module.exports = router;
const express = require('express');
const router = express.Router();
const listaTareas = require('../controllers/listaTareasController')

router.get('/tarea', listaTareas.obtenerTareas)
router.post('/tarea', listaTareas.crearTarea)
router.put('/tarea/:id', listaTareas.actualizarTarea)
router.delete('/tarea/:id', listaTareas.eliminarTarea)

module.exports = router;
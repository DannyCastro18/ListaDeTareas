const express = require('express');
const app = express();
const listaTareas = require('./routes/listaTareasRoute');
require ('dotenv').config();
const PORT = process.env.puerto
const connexionDB = require("./config/db");
connexionDB();
app.use(express.json());

app.use("/api", listaTareas);

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
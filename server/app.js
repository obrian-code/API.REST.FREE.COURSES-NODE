import express from 'express'
import routers from './routes/routes.js'
import Connection from './connection/bd.js'

import morgan from "morgan"
import cors  from 'cors'

const app = express()

// CONFIGURACION DE CABECERAS Y CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  app.use(cors());
  next();
})

//DEVOLVER LOS DATOS EN JSON
app.use(express.json());

//VERFICAR LA CONEXION
Connection.connect(error => {
  if (error) throw error;
  console.log('Database server running!');
})

//USAR VARIABLES DE ENTORNO 
app.use(morgan("dev"))

//USAR RUTAS
app.use(routers)

//EXPORTAR VARIABLE APP
export { app }

//npm run dev
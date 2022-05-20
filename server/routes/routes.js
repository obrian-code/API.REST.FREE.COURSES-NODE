import {Router} from 'express'
import {get, getall, getid,add,put,remove} from '../controllers/controllers.js'

  const router = Router()
  
  // RUTAS DEFINIDAS DE LA REST API

  router.get('/', get)// RAIZ - GET SE ENVIA DATOS AL CONTROLADOR
   
  router.get('/courses', getall)// RUTA COURSES - GETALL SE ENVIA DATOS AL CONTROLADOR
  
  router.get('/courses/:id',getid)// RUTA COURSES - GETID SE ENVIA DATOS AL CONTROLADOR
  
  router.post('/courses',add)// RUTA COURSES - ADD SE ENVIA DATOS AL CONTROLADOR
  
  router.put('/courses/:id',put)// RUTA COURSES - PUT SE ENVIA DATOS AL CONTROLADOR
  
  router.delete('/courses/:id', remove)// RUTA COURSES - REMOVE SE ENVIA DATOS AL CONTROLADOR
  
  //EXPORTAR LAS RUTAS
  export default router
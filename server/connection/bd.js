import mysql  from 'mysql'
import config from "../inc/config.js";

//CONEXCIÓN A LA BASE DE DATOS CON MYSQL

 const conexion =  mysql.createConnection({

          host: config.host,
          database: config.database,
          user: config.user,
          password: config.password
          
    })

//EXPORTAR LA CONEXCIÓN
export default conexion

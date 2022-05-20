import  connection from '../connection/bd.js'

//RESPONTE A LA RUTA RAIZ
export const get= (req, res) => {
    res.json('Welcome to my API COURSES!')
}

//RESPONTE A LA RUTA COURSES CON EL METODO GETALL
export const getall= async (req, res) => {
try {
            const getConnection= await connection // OBTEMOS LA CONEXIÓN

            const sql = 'SELECT * FROM courses'; //EL QUERY
            getConnection.query(sql, (error, results) => { // SE ENVIA EL QUERY
                  if (error) throw error; // CAPTURA EL ERROR
                    if (results.length > 0) {
                          res.json(results); // RESPUESTA DEL QUERY
                    } else {
                          res.send('Not result');// RESPUESTA DEL QUERY
                        }
              })
      } catch (error) {
        res.status(500).send(error.message) // CAPTURA EL ERROR LO ENVIA  
      }
  }

  //RESPONTE A LA RUTA COURSES CON EL METODO GETID
  export const getid= async (req, res) => {
    try {
              const getConnection= await connection // OBTEMOS LA CONEXIÓN
              const { id } = req.params // PARAMETRO RECOGIDO DE LA URL
              
              const sql = `SELECT * FROM courses WHERE id = ${id}`;//EL QUERY
              getConnection.query(sql, (error, result) => {// SE ENVIA EL QUERY
                    if (error) throw error;  // CAPTURA EL ERROR
            
                      if (result.length > 0) {
                          res.json(result);// RESPUESTA DEL QUERY
                      } else {
                          res.send('Not result')// RESPUESTA DEL QUERY
                      }
              })
    } catch (error) {
      res.status(500).send(error.message)// CAPTURA EL ERROR LO ENVIA
    }
    
  }

 //RESPONTE A LA RUTA COURSES CON EL METODO ADD 
  export const add= async (req, res) => {

    try {

          const getConnection= await connection //OBTEMOS LA CONEXIÓN
          const sql = 'INSERT INTO courses SET ?' //EL QUERY
          const { name, description,coupon,days,url,idiom,category,url_img,rating } = req.body // PARAMETROS RECOGIDOS DE LA URL
          
          if (name == "" ||  description == "" || coupon=== "" || days=== "" || 
              url=== "" || idiom=== "" || category=== "" || url_img=== "" || rating=== "") { //PREGUNTAR SI LOS DATOS RECIBIDOS ESTAN BASICIOS

                console.log("POST : Bad Request. Please fill all field")
                res.status(400).send("Bad Request. Please fill all field.")//ENVIAR QUE ES UN ERROR
                
            }else{
                  
                  const hoy = new Date(); //VARIABLE PARA CAPTURAR LA FECHA ACTUAL EN QUE SE REGISTRA UN CURSO
         
                  const customerObj = { //ARRAY ESTRUCTURADO PARA ENVIAR AL QUERY 
                    name: req.body.name,
                    description: req.body.description,
                    coupon: req.body.coupon,
                    days: req.body.days,
                    url: req.body.url,
                    idiom: req.body.idiom,
                    category: req.body.category,
                    url_img: req.body.url_img,
                    rating: req.body.rating,
                    days_public:hoy.getFullYear()+"-"+(hoy.getMonth()<10 ? "0"+(hoy.getMonth()+1) : (hoy.getMonth()+1))+"-"+(hoy.getDate()<10 ? "0"+hoy.getDate() : hoy.getDate())
              }
                getConnection.query(sql, customerObj, error => {// SE ENVIA EL QUERY
                  if (error) throw error  // CAPTURA EL ERROR
                  res.send('Customer created!') // RESPUESTA DEL QUERY
                })

                }
          

          
    } catch (error) {
      res.status(500).send(error.message)// CAPTURA EL ERROR LO ENVIA
    }

  }

 //RESPONTE A LA RUTA COURSES CON EL METODO PUT 
  export const put = async (req, res) => {

    try {
                const getConnection= await connection //OBTEMOS LA CONEXIÓN
                const { id } = req.params // PARAMETROS RECOGIDOS DE LA URL
                const { name, description,coupon,days,url,idiom,category,url_img,rating } = req.body // PARAMETROS RECOGIDOS DE LA URL

              if (name == "" ||  description ==="" || coupon==="" || days==="" || 
                  url==="" || idiom==="" ||  category==="" || url_img==="" || rating==="") {//PREGUNTAR SI LOS DATOS RECIBIDOS ESTAN BASICIOS

                  console.log("PUT : Bad Request. Please fill all field")
                  res.status(400).send("Bad Request. Please fill all field.") //ENVIAR QUE ES UN ERROR

              }else{
                      const sql = `UPDATE courses SET name = '${name}', description='${description}',coupon='${coupon}', days='${days}', url='${url}', idiom='${idiom}', category='${category}', url_img='${url_img}', 
                      rating='${rating}' WHERE id =${id}` //EL QUERY

                      getConnection.query(sql, error => {// SE ENVIA EL QUERY
                    if (error) throw error;  // CAPTURA EL ERROR
                    res.send('Customer updated!')// RESPUESTA DEL QUERY
                  })
            }

    } catch (error) {
      res.status(500).send(error.message)// CAPTURA EL ERROR LO ENVIA
    }
    
  }
 
  //RESPONTE A LA RUTA COURSES CON EL METODO REMOVE
  export const remove = async (req, res) => {

    try {
                  const getConnection= await connection //OBTEMOS LA CONEXIÓN
                  const { id } = req.params // PARAMETROS RECOGIDOS DE LA URL
                  const sql = `DELETE FROM courses WHERE id= ${id}`; //EL QUERY
                
                  getConnection.query(sql, error => {// SE ENVIA EL QUERY
                      if (error) throw error  // CAPTURA EL ERROR
                      res.send('Delete customer')// RESPUESTA DEL QUERY
                    })

    } catch (error) {
      res.status(500).send(error.message)// CAPTURA EL ERROR LO ENVIA
    }

  }
  
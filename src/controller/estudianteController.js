import { connectToDatabase, client } from "../database/database"

//Aquí se tiene que poner los datos de la base de datos nombre de usuario y demás
//Sé que se debe poner esta información en un .env pero la verdad nunca volveré a usar esos datos en ninguna otra base de datos

//Aquí se conecta con postgre
connectToDatabase()

//Esta funcion hace un query para traer todos los datos guardados en la tabla estudiantes en la base de datos prueba
export const getStudents = async(req, res) => {
    const result = await client.query('SELECT * FROM estudiantes');
    //res.json() es para mandar o enviar los datos del back hasta el front
    res.json(result.rows)
    //Según la documentación hay que terminar la conexión cuando se haya completado
}

export const createStudent = async(req, res) => {
    const { nombre, edad } = req.body
    console.log(req.body)
    const result = await client.query(`INSERT INTO estudiantes(nombre, edad) values ('${nombre}',${edad})`);
    res.json(result)
}
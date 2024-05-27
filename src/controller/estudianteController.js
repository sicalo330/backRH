import { connectToDatabase, getEstudiantes } from "../database/database"
const { Client } = require('pg')

//Aquí se tiene que poner los datos de la base de datos nombre de usuario y demás
//Sé que se debe poner esta información en un .env pero la verdad nunca volveré a usar esos datos en ninguna otra base de datos
const client = new Client({
    user:"postgres",
    host:"localhost",
    database:"prueba",
    password:"Agu4p4-nela",
    port: 5432,
})

//Aquí se conecta con postgre
client.connect()

export const conexion = async (req, res) => {
    console.log("asñldkaskldo")
    res.json("alskdj")
};

//Esta funcion hace un query para traer todos los datos guardados en la tabla estudiantes en la base de datos prueba
export const estudiantes = async(req, res) => {
    const result = await client.query('SELECT * FROM estudiantes');
    //res.json() es para mandar o enviar los datos del back hasta el front
    res.json(result.rows)
    //Según la documentación hay que terminar la conexión cuando se haya completado
    client.end()
}
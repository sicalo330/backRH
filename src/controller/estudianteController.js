import { connectToDatabase, getEstudiantes } from "../database/database"
const { Client } = require('pg')

const client = new Client({
    user:"postgres",
    host:"localhost",
    database:"prueba",
    password:"Agu4p4-nela",
    port: 5432,
})

client.connect()

export const conexion = async (req, res) => {
    console.log("asñldkaskldo")
    res.json("alskdj")
};

export const estudiantes = async(req, res) => {
    const result = await client.query('SELECT * FROM estudiantes');
    res.json(result.rows)
    client.end()
}
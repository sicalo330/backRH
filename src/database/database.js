import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export  const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

console.log(process.env.DB_HOST,
    process.env.DB_USER,
    process.env.DB_NAME,
     process.env.DB_PASSWORD,
    process.env.DB_PORT,)


// Conectar una sola vez al iniciar la aplicación
export const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to database!");
  } catch (err) {
    console.error("Error connecting to database:", err.message);
  }
};


export default client;

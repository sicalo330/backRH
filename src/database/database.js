const { Client } = require('pg')

export const client = new Client({
    user:"postgres",
    host:"localhost",
    database:"prueba",
    password:"Agu4p4-nela",
    port: 5432,
})

export const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log("Connected to database!");
    } catch (err) {
        console.error("Error connecting to database:", err.message);
    }
};

export const getStudents = async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM estudiantes');
        console.log(result)
        console.log(result.rows)
        client.end()
        res.json(result.rows);
    } catch (err) {
        console.error("Error querying database:", err.message);
        res.status(500).json({ error: "Error querying database" });
    }
};
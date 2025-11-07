// import { connectToDatabase, client } from "../database/database"
const db = require('../database/database.js'); // 👈 Importa tu conexión

//Aquí se tiene que poner los datos de la base de datos nombre de usuario y demás
//Sé que se debe poner esta información en un .env pero la verdad nunca volveré a usar esos datos en ninguna otra base de datos

//Aquí se conecta con postgre   
// connectToDatabase()

//Esta funcion hace un query para traer todos los datos guardados en la tabla estudiantes en la base de datos prueba
export const getmovies = (req, res) => {
  db.all('SELECT * FROM movies', [], (err, rows) => {
    if (err) {
      console.error('Error en la consulta:', err.message);
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows); // Enviar resultados al frontend
    }
  });
};

export const editMovie = async(req, res) => {
    const { id,movieData } = req.body;
    console.log(id,movieData.titulo, movieData.genero, movieData.duracion, movieData.hora, movieData.asientos, movieData.precio)
    await db.run('UPDATE movies SET genero = ?, duracion = ?, hora = ?, asientos = ?, precio = ?, titulo = ? WHERE id=?', [movieData.genero, movieData.duracion, movieData.hora, movieData.asientos, movieData.precio, movieData.titulo, id]);
    res.json("ok");
}

export const deleteMovie = async(req, res) => {
    const { id } = req.body;
    await db.run('DELETE FROM movies WHERE id=?', [id]);
    res.json("ok");
}


export const postUser = async(req, res) => {
    const { username, password } = req.body;
    await db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
    res.json({ message: 'Usuario creado exitosamente' });
}


export const postMovies = async(req, res) => {
    const { title, genre, duration, Hour, Seatings, Price } = req.body;
    await db.run('INSERT INTO movies (titulo, genero, duracion, hora, asientos, precio) VALUES (?, ?, ?, ?, ?, ?)', [title, genre, duration, Hour, Seatings, Price]);
    res.json('ok');
}


export const login = (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM users WHERE username = ? AND password = ?',[username, password],
    (err, row) => {
      if (err) {
        console.error('Error al consultar usuario:', err);
        return res.status(500).json({ message: 'Error en el servidor' });
      }
      if (row) {
        res.json('ok');
      } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
      }
    }
  );
};


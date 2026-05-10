const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite.');
  }
});

db.serialize(() => {

  // // Crear nueva tabla con salario y ajuste
  // db.run(`
  //   CREATE TABLE IF NOT EXISTS candidatos (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     nombre TEXT,
  //     correo TEXT,
  //     cargo TEXT,
  //     experiencia INTEGER,
  //     puntaje INTEGER,
  //     estado TEXT,
  //     salario INTEGER,
  //     ajuste INTEGER
  //   )
  // `);

  // // Copiar datos antiguos
  // db.run(`
  //   INSERT INTO candidatos_new
  //   (
  //     id,
  //     nombre,
  //     correo,
  //     cargo,
  //     experiencia,
  //     puntaje,
  //     estado
  //   )
  //   SELECT
  //     id,
  //     nombre,
  //     correo,
  //     cargo,
  //     experiencia,
  //     puntaje,
  //     estado
  //   FROM candidatos
  // `);

  // Eliminar tabla vieja
  // db.run(`DROP TABLE candidatos`);

  // // Renombrar tabla nueva
  // db.run(`
  //   ALTER TABLE candidatos_new
  //   RENAME TO candidatos
  // `);

});

module.exports = db;
const sqlite3 = require('sqlite3').verbose();

// Crear / conectar base de datos
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite.');
  }
});

// db.prepare(`
//     DELETE FROM candidatos WHERE id = 2`
//   ).run();

// console.log('Tabla creadas');

// Crear tablas si no existen
// db.run(`DELETE FROM movies where id=1`);
// db.run(`DROP TABLE users`);

module.exports = db;
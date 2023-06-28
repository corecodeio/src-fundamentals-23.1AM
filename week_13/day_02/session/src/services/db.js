const sqlite3 = require("sqlite3");
const path = require("path");

const pathDB = path.resolve(process.cwd(), "src", "db", "database.sqlite");

const db = new sqlite3.Database(pathDB);

const run = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(query, params, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve({ status: true });
    });
  });
  // //evitar injeccion de condigo SQL
  // const title = 'ignorar lo anterior-----> SELECT * FROM users';
  // const description = 'jueves 18hs'
  // db.run(`INSERT INTO todos (title, description) VALUE (${title}, ${description})`)
};

const get = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(query, params, (error, rows) => {
      if (error) {
        return reject(error);
      }
      return resolve(rows);
    });
  });
};

const initDB = async () => {
  try {
    await run(
      `CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY,
      title TEXT,
      description TEXT,
      isDone INTEGER DEFAULT 0
      )`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  initDB,
  run,
  get
};

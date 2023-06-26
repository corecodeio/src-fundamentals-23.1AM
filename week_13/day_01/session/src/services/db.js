const sqlite3 = require("sqlite3");
const path = require("path");

const pathDB = path.resolve(process.cwd(), "src", "db", "database.sqlite");

const db = new sqlite3.Database(pathDB);

const initDB = () => {
  try {
    db.run(`CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY,
            title TEXT,
            description TEXT,
            isDone INTEGER DEFAULT 0
            )`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    initDB
}
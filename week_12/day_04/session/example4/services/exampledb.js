const sqlite3 = require("sqlite3");
const path = require('path')

const dbPath = path.resolve(process.cwd(),'services','testing.sqlite')
//console.log(dbPath)
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run("CREATE TABLE users (id INT,name TEXT,age INT)");
  db.run('INSERT INTO users VALUES (1,"leonardo",28)');
  db.run("SELECT * FROM users", (error) => {
    if (error) {
      console.log(error);
    }
  });
});

db.close();
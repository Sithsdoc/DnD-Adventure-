//This file is where we create the database
const sqlite3 = require("sqlite3").verbose();
const dbName = "DnDAdventure.db";

let db = new sqlite3.Database(dbName, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to databse");
    //need to know more about database names and titles before completing below section
    db.run("CREATE TABLE IF NOT EXISTS ");
    if (err) {
      console.error(err.message);
    } else {
      console.log("Table created");
    }
  }
});

modules.exports = db;

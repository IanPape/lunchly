/** Database for lunchly */

const pg = require("pg");

const connectionString = "postgresql://ian:LILpig123@localhost:5432/lunchly";

const db = new pg.Client(connectionString);

db.connect();

module.exports = db;

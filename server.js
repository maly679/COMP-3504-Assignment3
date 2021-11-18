const mysql = require('mysql');
const dotenv = require('dotenv');


dotenv.config();


const {

    DB_PASS,
    DB_USER,
    DB_NAME
} = process.env;
const config = {
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    socketPath: `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
  };

const connection = mysql.createConnection(config);

// create connection
connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected to database ${DB_NAME}`);
  });
  
  module.exports.connection = connection;
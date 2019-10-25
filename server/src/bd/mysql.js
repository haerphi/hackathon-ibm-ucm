const mysql = require("mysql2/promise");

export const connection = mysql.createConnection(process.env.DB_URL);

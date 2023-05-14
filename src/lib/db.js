// config/db.js
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "3.234.10.181",
    user: "root",
    password: "Fdsbycity57R53",
    database: "felicity",
    port: "3306",
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("Connected to database.");
});

module.exports = connection;

const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: 'localhost',
    database: 'pereciveis',
    user: 'root',
    password: '123456'
})

module.exports = {pool}
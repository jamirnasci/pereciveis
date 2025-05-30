const { pool } = require("../db/db.cjs");

async function getCategorias(){
    try {
        const conn = await pool.getConnection()
        const [result] = await conn.execute("SELECT * FROM categoria")
        return {
            success: true,
            values: result
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

module.exports = {
    getCategorias
}
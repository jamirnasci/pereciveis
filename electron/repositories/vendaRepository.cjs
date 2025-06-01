const { pool } = require("../db/db.cjs")

async function createVenda(venda){
    const sql = 'INSERT INTO venda(total_itens, total_compra, data) VALUES(?, ?, ?)'
    let conn
    try {
        conn = await pool.getConnection()
        const stmt = await conn.prepare(sql)
        const result = await stmt.execute([
            venda.total_itens,
            venda.total_compra,
            venda.data
        ])
        return {
            success: true,
            insertId: result[0].insertId
        }
    } catch (error) {
        return {
            success: false,
            error: error.messaga
        }
    } finally{
        if (conn) conn.release()
    }
}

async function findAllVendas() {
    const sql = 'SELECT * FROM venda'
    let conn
    try {
        conn = await pool.getConnection()
        const [result] = await conn.execute(sql)
        return {
            success: true,
            values: result
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    } finally{
        if (conn) conn.release()
    }
}

module.exports = {
    createVenda,
    findAllVendas
}
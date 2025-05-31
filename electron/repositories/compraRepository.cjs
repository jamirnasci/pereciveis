const { pool } = require("../db/db.cjs")

async function createCompraLista(listaCompra, vendaId) {
    const sql = 'INSERT INTO lista_compra(produto_idproduto, venda_idvenda) VALUES(?, ?)'
    let affectedRows = 0
    
    try {
        const conn = await pool.getConnection()
        for (const compra of listaCompra) {
            const stmt = await conn.prepare(sql)
            const result = await stmt.execute([
                compra.produto_idproduto,
                vendaId
            ])
            affectedRows += result[0].affectedRows
        }
        return {
            success: affectedRows > 0
        }
    } catch (error) {
        console.log('BANCO ERROR: ' + error)
        return {
            success: false,
            error: error.message
        }
    }
}


module.exports = {
    createCompraLista
}
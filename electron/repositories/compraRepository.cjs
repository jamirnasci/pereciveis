const { pool } = require("../db/db.cjs")

async function createCompraLista(listaCompra, vendaId) {
    const sql = 'INSERT INTO lista_compra(produto_idproduto, quant_item, venda_idvenda) VALUES(?, ?, ?)'
    let affectedRows = 0
    let conn
    try {
        conn = await pool.getConnection()
        for (const compra of listaCompra) {
            const stmt = await conn.prepare(sql)
            const result = await stmt.execute([
                compra.produto_idproduto,
                compra.quantidade,
                vendaId
            ])
            affectedRows += result[0].affectedRows
        }
        return {
            success: affectedRows > 0
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }finally{
        if(conn) conn.release()
    }
}

async function findListaCompras(idvenda){
    let conn
    const sql = `
        SELECT p.nome, p.preco, lc.quant_item FROM venda v 
            INNER JOIN lista_compra lc ON v.idvenda = lc.venda_idvenda
            INNER JOIN produto p ON p.idproduto = lc.produto_idproduto
        WHERE v.idvenda = ?
    `
    try {
        conn = await pool.getConnection()
        const stmt = await conn.prepare(sql)
        const [result] = await stmt.execute([idvenda])
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
        if(conn) conn.release()
    }
}

module.exports = {
    createCompraLista,
    findListaCompras
}
const { pool } = require("../db/db.cjs");

async function findCategorias() {
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

async function createProduto(p) {
    const sql = 'INSERT INTO produto (nome, peso, marca, data_entrada, data_validade, quantidade, preco,categoria_idcategoria, fornecedor_idfornecedor) VALUES (?,?,?,?,?,?,?,?,?)'
    let conn
    try {
        conn = await pool.getConnection()
        const stmt = await conn.prepare(sql)
        const result = await stmt.execute([
            p.nome,
            p.peso,
            p.marca,
            p.data_entrada,
            p.data_validade,
            p.quantidade,
            p.preco,
            p.categoria_idcategoria,
            p.fornecedor_idfornecedor
        ])
        conn.release()
        return {
            success: true
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    } finally {
        if (conn) conn.release()
    }

}

async function findAllProdutos() {
    const sql = `SELECT p.idproduto, p.nome, p.quantidade, p.preco, c.nome AS categoria 
        FROM produto p INNER JOIN categoria c ON p.categoria_idcategoria = c.idcategoria
        
    `
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
    } finally {
        if (conn) conn.release()
    }
}

async function findProdutoById(idproduto) {
    const sql = 'SELECT * FROM produto WHERE idproduto = ?'
    let conn
    try {
        conn = await pool.getConnection()
        const stmt = await conn.prepare(sql)
        const [result] = await stmt.execute([idproduto])
        return {
            success: true,
            values: result
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    } finally {
        if (conn) conn.release()
    }
}

async function updateProduto(p) {
    const sql = `UPDATE produto 
        SET nome = ?, 
        peso = ?, 
        marca = ?, 
        data_entrada = ?, 
        data_validade = ?, 
        quantidade = ?, 
        preco = ?,
        categoria_idcategoria = ?, 
        fornecedor_idfornecedor = ?
    WHERE idproduto = ?`
    let conn
    try {
        conn = await pool.getConnection()
        const stmt = await conn.prepare(sql)
        const result = await stmt.execute([
            p.nome,
            p.peso,
            p.marca,
            p.data_entrada,
            p.data_validade,
            p.quantidade,
            p.preco,
            p.categoria_idcategoria,
            p.fornecedor_idfornecedor,
            p.idproduto
        ])
        conn.release()
        return {
            success: true
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    } finally {
        if (conn) conn.release()
    }
}

module.exports = {
    findCategorias,
    createProduto,
    findAllProdutos,
    findProdutoById,
    updateProduto
}
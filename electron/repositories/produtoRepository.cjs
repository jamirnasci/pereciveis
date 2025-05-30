const { pool } = require("../db/db.cjs");

async function getCategorias() {
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
    const sql = 'INSERT INTO produto (nome, categoria, peso, marca, data_entrada, data_validade, quantidade, categoria_idcategoria, fornecedor_idfornecedor) VALUES (?,?,?,?,?,?,?,?,?)'
    try {
        const conn = await pool.getConnection()
        const stmt = await conn.prepare(sql)
        const result = await stmt.execute([
            p.nome,
            p.categoria,
            p.peso,
            p.marca,
            p.data_entrada,
            p.data_validade,
            p.quantidade,
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
    }
}

module.exports = {
    getCategorias,
    createProduto
}
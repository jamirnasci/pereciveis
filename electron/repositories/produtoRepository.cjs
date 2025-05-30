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

async function createProduto(nome, categoria, peso, marca, data_entrada, data_validade, quantidade, categoria_idcategoria, fornecedor_idfornecedor){
    const sql = 'INSERT INTO produto (nome, categoria, peso, marca, data_entrada, data_validade, quantidade, categoria_idcategoria, fornecedor_idfornecedor) VALUES (?,?,?,?,?,?,?,?,?)'
    try {
        const conn = await pool.getConnection()
        const stmt = await conn.prepare(sql)
        const result = await stmt.execute([nome, categoria, peso, marca, data_entrada, data_validade, quantidade, categoria_idcategoria, fornecedor_idfornecedor])
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
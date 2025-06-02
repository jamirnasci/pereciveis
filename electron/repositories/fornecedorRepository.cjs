const {pool} = require('../db/db.cjs')

async function findFornecedores(){
    let conn
    try {
        conn = await pool.getConnection()
        const [result] = await conn.execute("SELECT * FROM fornecedor")
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

async function createFornecedor(forn){
    let conn
    const sql = 'INSERT INTO fornecedor(nome, telefone, email, endereco) VALUES(?,?,?,?)'
    try {
        conn = await pool.getConnection()
        const stmt = await conn.prepare(sql)
        const result = await stmt.execute([
            forn.nome,
            forn.telefone,
            forn.email,
            forn.endereco
        ])
        if(result[0].affectedRows > 0){
            return {
                success: true
            }
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
    findFornecedores,
    createFornecedor
}
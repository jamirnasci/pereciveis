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

module.exports = {
    findFornecedores
}
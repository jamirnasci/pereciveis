const { ipcMain } = require('electron')
const { app, BrowserWindow } = require('electron/main')
const path = require('path')
const { createProduto, findCategorias, findAllProdutos, findProdutoById, updateProduto } = require('./repositories/produtoRepository.cjs')
const { findFornecedores, createFornecedor } = require('./repositories/fornecedorRepository.cjs')
const { createVenda, findAllVendas } = require('./repositories/vendaRepository.cjs')
const { createCompraLista, findListaCompras } = require('./repositories/compraRepository.cjs')
const { error } = require('console')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.cjs')
        }
    })
    win.loadURL('http://localhost:5173/')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
    ipcMain.handle('create-user', (event, nome) => {
        console.log(nome)
    })
    ipcMain.handle('find-categorias', async (event) => {
        const c = await findCategorias()

        if (c.success) {
            return c.values
        }
        console.log(c.error)
    })
    ipcMain.handle('find-fornecedores', async (event) => {
        const f = await findFornecedores()
        if (f.success) {
            return f.values
        }
        console.log(f.error)
    })
    ipcMain.handle('create-fornecedor', async (event, forn)=>{
        const result = await createFornecedor(forn)
        if(result.success){
            return {
                msg: 'Fornecedor cadastrado !'
            }
        }
        console.log(result.error)
        return {
            msg: 'Falha ao cadastrar fornecedor'
        }
    })
    ipcMain.handle('create-produto', async (event, p) => {
        const result = await createProduto(p)
        if (result.success) {
            return {
                msg: 'Produto inserido com sucesso'
            }
        }
        console.log(result.error)
        return {
            msg: 'Falha ao cadastrar produto'
        }
    })
    ipcMain.handle('find-all-produtos', async (event) => {
        const p = await findAllProdutos()
        if (p.success) {
            return p.values
        }
        console.log(p.error)
    })
    ipcMain.handle('create-venda', async (event, venda) => {
        const result = await createVenda(venda)
        if (result.success) {
            return result.insertId
        }
        console.log(result.error)
    })
    ipcMain.handle('create-lista-compra', async (event, listaCompra, vendaId) => {
        const result = await createCompraLista(listaCompra, vendaId)
        if (result.success) {
            return {
                msg: 'Compra cadastrada !'
            }
        }
        console.log(result.error)
        return {
            msg: 'Falha ao cadastrar compra !'
        }
    })
    ipcMain.handle('find-lista-compras', async (event, idvenda)=>{
        const lista = await findListaCompras(idvenda)
        if(lista.success){
            return lista.values
        }
        console.log(lista.error)
        return {
            msg: 'Falha ao buscar lista compras'
        }
    })
    ipcMain.handle('find-all-vendas', async ()=>{
        const result = await findAllVendas()
        if(result.success){
            return result.values
        }
        console.log(result.error)
        return {
            msg: 'Falha ao listar compras'
        }
    })
    ipcMain.handle('find-produto-by-id', async (event, idproduto)=>{
        const result = await findProdutoById(idproduto)
        if(result.success){
            return result.values
        }
        console.log(error)
        return {
            msg: 'Falha ao procurar produto'
        }
    })
    ipcMain.handle('update-produto', async (event, produto)=>{
        const result = await updateProduto(produto)
        if(result.success){
            return {
                msg: 'Produto atualizado !'
            }
        }
        console.log(result.error)
        return {
                msg: 'Falha ao atualizar produto'
            }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
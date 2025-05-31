const { ipcMain } = require('electron')
const { app, BrowserWindow } = require('electron/main')
const path = require('path')
const { createProduto, findCategorias, findAllProdutos } = require('./repositories/produtoRepository.cjs')
const { findFornecedores } = require('./repositories/fornecedorRepository.cjs')
const { createVenda } = require('./repositories/vendaRepository.cjs')
const { createCompraLista } = require('./repositories/compraRepository.cjs')

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
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
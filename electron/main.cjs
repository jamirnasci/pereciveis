const { ipcMain } = require('electron')
const { app, BrowserWindow } = require('electron/main')
const path = require('path')
const { getCategorias, createProduto } = require('./repositories/produtoRepository.cjs')
const { getFornecedores } = require('./repositories/fornecedorRepository.cjs')

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
    ipcMain.handle('get-categorias', async (event) => {
        const c = await getCategorias()
        
        if(c.success){
            return c.values
        }
        console.log(c.error)
    })
    ipcMain.handle('get-fornecedores', async (event)=>{
        const f = await getFornecedores()
        if(f.success){
            return f.values
        }
        console.log(f.error)
    })
    ipcMain.handle('create-produto', async (event, nome, categoria, peso, marca, data_entrada, data_validade, quantidade, categoria_idcategoria, fornecedor_idfornecedor)=>{
        const result = await createProduto(nome, categoria, peso, marca, data_entrada, data_validade, quantidade, categoria_idcategoria, fornecedor_idfornecedor)
        if(result.success){
            return {
                msg: 'Produto inserido com sucesso'
            }
        }
        return {
            msg: 'Falha ao cadastrar produto'
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
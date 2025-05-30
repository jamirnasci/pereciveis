// eslint-disable-next-line no-undef
const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    createUser: (nome)=> ipcRenderer.invoke('create-user', nome),
    getCategorias: ()=> ipcRenderer.invoke('get-categorias'),
    getFornecedores: () => ipcRenderer.invoke('get-fornecedores'),
    createProduto: (p) => ipcRenderer.invoke('create-produto', p)
})
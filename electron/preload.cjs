// eslint-disable-next-line no-undef
const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    createUser: (nome)=> ipcRenderer.invoke('create-user', nome),
    getCategorias: ()=> ipcRenderer.invoke('get-categorias'),
    getFornecedores: () => ipcRenderer.invoke('get-fornecedores'),
    createProduto: (nome, categoria, peso, marca, data_entrada, data_validade, quantidade, categoria_idcategoria, fornecedor_idfornecedor) => ipcRenderer.invoke('create-produto', nome, categoria, peso, marca, data_entrada, data_validade, quantidade, categoria_idcategoria, fornecedor_idfornecedor)
})
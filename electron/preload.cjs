// eslint-disable-next-line no-undef
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    createUser: (nome) => ipcRenderer.invoke('create-user', nome),
    findCategorias: () => ipcRenderer.invoke('find-categorias'),
    findFornecedores: () => ipcRenderer.invoke('find-fornecedores'),
    createFornecedor: (forn) => ipcRenderer.invoke('create-fornecedor', forn),
    createProduto: (p) => ipcRenderer.invoke('create-produto', p),
    findAllProdutos: () => ipcRenderer.invoke('find-all-produtos'),
    createVenda: (venda) => ipcRenderer.invoke('create-venda', venda),
    createCompraLista: (listaCompra, vendaId) => ipcRenderer.invoke('create-lista-compra', listaCompra, vendaId),
    findAllVendas: () => ipcRenderer.invoke('find-all-vendas'),
    findProdutoById: (idproduto) => ipcRenderer.invoke('find-produto-by-id', idproduto),
    updateProduto: (produto) => ipcRenderer.invoke('update-produto', produto)
})
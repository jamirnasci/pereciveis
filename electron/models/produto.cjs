class Produto {
    constructor(nome, categoria, peso, marca, data_entrada, data_validade, quantidade){
        this.nome = nome
        this.categoria = categoria
        this.peso = peso
        this.marca = marca
        this.data_entrada = data_entrada
        this.data_validade = data_validade
        this.quantidade = quantidade
    }
    setCategoria(categoria_idcategoria){
        this.categoria_idcategoria = categoria_idcategoria
    }
    setFornecedor(fornecedor_idfornecedor){
        this.fornecedor_idfornecedor = fornecedor_idfornecedor
    }
}

module.exports = {
    Produto
}
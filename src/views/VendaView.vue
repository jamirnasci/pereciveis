<template>
    <div class="container p-2">
        <h1>Venda</h1>
        <div class="form-container w-75">
            <h2>Nova venda</h2>
            <div class="d-flex align-items-end">
                <div class="d-flex flex-column w-75">
                    <label for="">Produto:</label>
                    <input type="text" class="form-control" list="fruits" v-model="produto">
                    <datalist id="fruits">
                        <option v-for="p in produtos" :value="`${p.nome} - ${p.idproduto}`"></option>
                    </datalist>
                </div>
                <div class="d-flex flex-column w-25">
                    <label for="">quantidade</label>
                    <input v-model="quantidade" type="number" name="quantidade" id="quantidade" class="form-control">
                </div>
                <button v-on:click="addProduto" class="btn btn-primary">Adicionar</button>
            </div>
            <div id="compra-content" class="d-flex flex-column">
                <div class="overflow-auto">
                    <table class="table table-striped" id="compra-table">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Preço</th>
                                <th>Quantidade</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in listaCompras">
                                <td>{{ item.nome }}</td>
                                <td>{{ item.preco }}</td>
                                <td>{{ item.quantidade }}</td>
                                <td>{{ item.total }} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="bg-light d-flex justify-content-around" id="compra-info">
                    <div class="d-flex">
                        <h2>Total Itens: </h2>
                        <h2 class="text-secondary">{{ totalItens }}</h2>
                    </div>
                    <div class="d-flex">
                        <h2>Total Compra R$: </h2>
                        <h2 class="text-success">{{ totalCompras.toFixed(2) }}</h2>
                    </div>
                    <div class="d-flex">
                        <button v-on:click="finalizar" class="btn btn-success">Finalizar</button>
                        <button v-on:click="limpar" class="btn btn-warning ml-1">Limpar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import { onMounted, ref } from 'vue';

const produto = ref('')
const quantidade = ref(0)
const totalItens = ref(0)
const totalCompras = ref(0)
const listaCompras = ref([])

const produtos = ref([])
onMounted(async ()=>{
    const p = await window.electronAPI.findAllProdutos()
    produtos.value = p
})

function addProduto() {
    const id = produto.value.split(' - ')[1]
    let p = produtos.value.filter((item)=>{
        if(item.idproduto == id){
            return item
        }
    })
    p = p[0]
    totalItens.value += quantidade.value
    totalCompras.value += p.preco * quantidade.value
    listaCompras.value.push({
        idproduto: p.idproduto,
        nome: p.nome,
        preco: p.preco,
        quantidade: quantidade.value,
        total: quantidade.value * p.preco
    })
}

function limpar(){
    listaCompras.value = []
    totalCompras.value = 0
    totalItens.value = 0
}

async function finalizar(){
    const venda = {
        total_itens: totalItens.value,
        total_compra: totalCompras.value,
        data: new Date()
    }
    const vendaId = await window.electronAPI.createVenda(venda)

    const produtoLista = listaCompras.value.map( (item) =>{
        return {
            produto_idproduto: item.idproduto,
            quantidade: item.quantidade 
        }
    })
    const result = await window.electronAPI.createCompraLista(produtoLista, vendaId)
    alert(result.msg)
}
</script>

<style lang="css" scoped>
#compra-content {
    height: 450px;
}

#compra-table {
    height: 90%;
}

#compra-info {
    height: 10%;
}
</style>
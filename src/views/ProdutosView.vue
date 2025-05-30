<template>
    <div class="container p-2">
        <h1>Produtos</h1>
        <div class="form-container w-75">
            <form v-on:submit="salvar" class="d-flex flex-column" id="form-produto">
                <h2>Cadastrar Produto</h2>
                <div class="d-flex justify-content-left">
                    <div class="w-50">
                        <label for="nome">Nome do Produto:</label><br>
                        <input v-model="nome" class="form-control" type="text" id="nome" name="nome" required>
                    </div>
                    <div class="ml-2 w-50">
                        <label for="categoria">Categoria:</label><br>
                        <select  v-model="categoria" class="form-control" id="categoria" name="categoria">
                            <option v-for="c in categorias" :key="c.idcategoria" :value="c.idcategoria">{{ c.nome }}</option>
                        </select>
                    </div>
                </div>
                <div class="d-flex align-items-end">
                    <div class="w-50">
                        <label for="fornecedor">Fornecedor:</label>
                        <select v-model="fornecedor" class="form-control" id="fornecedor" name="fornecedor">
                            <option v-for="f in fornecedores" :key="f.idfornecedor" :value="f.idfornecedor">{{ f.nome }}</option>
                        </select>
                    </div>
                    <input class="btn btn-primary ml-2" type="button" value="Cadastrar Fornecedor">
                </div>
                <div class="d-flex">
                    <div class="w-50">
                        <label for="peso">Peso (g):</label>
                        <input v-model="peso" class="form-control" id="peso" name="peso" required />
                    </div>
                    <div class="w-50 ml-2">
                        <label for="marca">Marca:</label>
                        <input v-model="marca" class="form-control" type="text" id="marca" name="marca">
                    </div>
                </div>
                <div class="d-flex">
                    <div class="w-50">
                        <label for="data-entrada">Data de entrada:</label>
                        <input v-model="dataEntrada" type="date" class="form-control" id="data-entrada" name="data-entrada" required />
                    </div>
                    <div class="w-50 ml-2">
                        <label for="data-validade">Data de validade:</label>
                        <input v-model="dataValidade" type="date" class="form-control" id="data-validade" name="data-validade" required />
                    </div>
                </div>

                <label for="codigo_barras">Código de Barras (opcional):</label>
                <input class="form-control" type="text" id="codigo_barras" name="codigo_barras">
                <div class="d-flex">
                    <button class="btn btn-success mt-2 w-25" type="submit">Salvar</button>
                    <button v-on:click="limpar" class="btn btn-warning mt-2 w-25 ml-1" type="submit">Limpar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="js">
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { onMounted, ref } from 'vue';

const nome = ref('')
const categoria = ref('')
const fornecedor = ref('')
const peso = ref('')
const marca = ref('')
const dataEntrada = ref('')
const dataValidade = ref('')

const categorias = ref([])
const fornecedores = ref([])

onMounted(async ()=>{
    categorias.value = await window.electronAPI.getCategorias()
    fornecedores.value = await window.electronAPI.getFornecedores()
})

function limpar(){
    nome.value = ''
    categoria.value = ''
    fornecedor.value = ''
    peso.value = ''
    marca.value = ''
    dataEntrada.value = ''
    dataValidade.value= ''
}

function salvar(event){
    event.preventDefault()
    window.electronAPI.createUser('jamir')
}
</script>
<template>
    <div class="container p-2">
        <h1>Estoque</h1>
        <div class="form-container w-75">
            <h2>Gerenciar estoque</h2>
            <div class="d-flex justify-content-left flex-column">
                <label class="form-label" for="">Procurar</label>
                <div class="d-flex">
                    <input class="form-control" type="text" name="produto" id="produto" placeholder="Produto...">
                    <button class="btn btn-success">
                        Procurar
                    </button>
                </div>
            </div>
            <div class="produtos-container p-2">
                <produto-card v-for="p in produtos" :nome="p.nome" :categoria="p.categoria" :quantidade="p.quantidade"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ProdutoCard from '@/components/ProdutoCard.vue';
import { onMounted, ref } from 'vue';

const produtos = ref([])

onMounted(async ()=>{
    produtos.value = await window.electronAPI.findAllProdutos()
})

</script>

<style lang="css" scoped>
.produtos-container{
    overflow: auto;
    max-height: 400px;
}
</style>
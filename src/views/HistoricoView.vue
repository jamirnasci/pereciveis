<template>
    <div class="container p-2">
        <h1>Historico</h1>
        <div class="form-container w-75">
            <h2>Histórico de vendas</h2>
            <div id="table-container">
                <table class="table table-sm table-striped">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Total Itens</th>
                            <th>Valor</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="v in vendas">
                            <td>{{ formatDate(v.data) }}</td>
                            <td>{{ v.total_itens }}</td>
                            <td>R$ {{ v.total_compra }}</td>
                            <td><button class="btn btn-success" v-on:click="handleListaCompraModal(v.idvenda)">Ver Itens</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <lista-compra-modal :idvenda="idvenda" v-if="modalVisible" :handle-modal="handleListaCompraModal" />
</template>

<script setup lang="js">
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { onMounted, ref } from 'vue';
import ListaCompraModal from '@/components/ListaCompraModal.vue';

const vendas = ref([])
const modalVisible = ref(false)
const idvenda = ref(null)

onMounted(async () => {
    vendas.value = await window.electronAPI.findAllVendas()
})

function formatDate(data) {
    const date = new Date(data);

    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'America/Sao_Paulo' // Define o fuso horário para o Brasil
    };

    const formattedDate = date.toLocaleString('pt-BR', options);
    return formattedDate
}

function handleListaCompraModal(id) {
    modalVisible.value = modalVisible.value ? false : true
    if (id) {
        idvenda.value = id
    }
}

</script>

<style lang="css" scoped>
#table-container {
    height: 500px;
    overflow: auto;
}
</style>
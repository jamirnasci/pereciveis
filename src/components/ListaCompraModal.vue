<template>
    <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog w-100" role="document">
            <div class="modal-content w-100">
                <div class="modal-header">
                    <h5 class="modal-title">Lista de compras</h5>
                </div>
                <div class="modal-body w-100">
                    <div class="overflow-auto w-100" style="max-height: 400px;">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Produto</th>
                                    <th scope="col">Preço</th>
                                    <th scope="col">Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in listaCompras">
                                    <td>{{ item.nome }}</td>
                                    <td>{{ item.preco }}</td>
                                    <td>{{ item.quant_item }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button v-on:click="props.handleModal" type="button" class="btn btn-danger">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import { onMounted, ref } from 'vue'

const props = defineProps(['idvenda', 'handleModal'])

const listaCompras = ref([])

onMounted(async () => {
    const lista = await window.electronAPI.findListaCompras(props.idvenda)
    console.log(lista)
    listaCompras.value = lista
})



</script>

<style lang="css" scoped>
.modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
}
</style>
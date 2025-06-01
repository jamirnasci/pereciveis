<template>
    <div class="d-flex align-items-center justify-content-between rounded border-bottom border-secondary p-2 mt-2">
        <div>
            <h3>{{ props.nome }}</h3>
            <div>
                <div>
                    <strong>Categoria: </strong>
                    <span>{{ props.categoria }}</span>
                </div>
                <div>
                    <strong>Quantidade: </strong>
                    <span>{{ props.quantidade }}</span>
                </div>
            </div>
        </div>
        <div>
            <button v-on:click="produtoForm" class="btn btn-primary">Editar</button>
            <button class="btn btn-danger ml-1">Excluir</button>
        </div>
    </div>
</template>

<script setup lang="js">
import { useRouter } from 'vue-router';

const props = defineProps(['nome', 'categoria', 'quantidade', 'handleModal', 'idproduto'])
const router = useRouter()

function produtoForm() {
    router.replace({
        name: 'produtosEditar',
        params: {
            idproduto: props.idproduto
        }
    })
}
</script>
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
            <button class="btn btn-primary">Editar</button>
            <button class="btn btn-danger ml-1">Excluir</button>
        </div>
    </div>
</template>

<script setup lang="js">
    const props = defineProps(['nome', 'categoria', 'quantidade'])
</script>
<template>
    <nav>
        <div class="d-flex flex-column align-items-end p-1">
            <h1 class="text-light font-weight-bold m-0">Perecíveis</h1>
            <i class="text-light">Sistema</i>
        </div>
        <a href="/">Home</a>
        <a href="/produtos">Produtos</a>
        <a href="/estoque">Estoque</a>
        <a href="/venda">Venda</a>
        <a href="/historico">Histórico</a>
    </nav>
</template>

<script setup lang="js">
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
</script>

<style lang="css" scoped>
    nav{
        width: 15%;
        left: 0px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: hsla(160, 100%, 37%, 1);
    }
    nav > a {
        color: white;
        padding: 5px;
        text-decoration: none;
    }
    nav > a:hover{
        background-color: hsla(190, 100%, 37%, 1);
    }
</style>
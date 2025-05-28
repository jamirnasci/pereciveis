<template>
    <div class="container p-2">
        <h1>Historico</h1>
        <div class="form-container w-75">
            <h2>Histórico de operações</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Operação</th>
                        <th>Data</th>
                        <th>Total Itens</th>
                        <th>Valor</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Compra</td>
                        <td>30/05/2025</td>
                        <td>12</td>
                        <td>R$ 500</td>
                        <td><button class="btn btn-success">Detalhes</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="js">
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
</script>
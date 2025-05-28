<template>
    <div class="container p-2">
        <h1>Venda</h1>
        <div class="form-container w-75">
            <h2>Nova venda</h2>
            <div class="d-flex align-items-end">
                <div class="d-flex flex-column w-75">
                    <label for="">Produto:</label>
                    <input type="text" class="form-control">
                </div>
                <div class="d-flex flex-column w-25">
                    <label for="">quantidade</label>
                    <input type="number" name="quantidade" id="quantidade" class="form-control">
                </div>
                <button class="btn btn-success">Adicionar</button>
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
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="bg-light d-flex justify-content-around" id="compra-info">
                    <div class="d-flex">
                        <h2>Total Itens: </h2>
                        <h2 class="text-secondary">12</h2>
                    </div>
                    <div class="d-flex">
                        <h2>Total Compra R$: </h2>
                        <h2 class="text-success">1400.45</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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
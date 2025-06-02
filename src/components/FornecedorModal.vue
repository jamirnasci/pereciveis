<template>
    <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog mw-100" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                </div>
                <div class="modal-body">
                    <div class="d-flex">
                        <div class="m-1">
                            <label for="nome">Nome: </label>
                            <input v-model="nomeModal" class="form-control" type="text" name="nomeModal" id="nomeModal">
                        </div>
                        <div class="m-1">
                            <label for="telefone">Telefone: </label>
                            <input v-model="telefoneModal" class="form-control" type="text" name="telefoneModal" id="telefoneModal">
                        </div>
                        <div class="m-1">
                            <label for="email">E-mail: </label>
                            <input v-model="emailModal" class="form-control" type="text" name="emailModal" id="emailModal">
                        </div>
                    </div>
                        <label for="endereco">Endereço</label>
                        <input v-model="enderecoModal" class="form-control" type="text" name="enderecoModal" id="enderecoModal">
                </div>
                <div class="modal-footer">
                    <button v-on:click="cadastrarFornecedor" type="button" class="btn btn-primary">Cadastrar</button>
                    <button v-on:click="props.handleModal" type="button" class="btn btn-danger">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue'

const props = defineProps(['handleModal'])

const nomeModal =  ref('')
const telefoneModal =  ref('')
const emailModal =  ref('')
const enderecoModal =  ref('')

async function cadastrarFornecedor(){
    const result = await window.electronAPI.createFornecedor({
        nome: nomeModal.value,
        telefone: telefoneModal.value,
        email: emailModal.value,
        endereco: enderecoModal.value,
    })
    alert(result.msg)
}

</script>

<style lang="css" scoped>
.modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
}
</style>
<template>
    <input type="text" id="complement" aria-describedby="complementHelp" v-bind="dadosPessoais.nome">
    <button style="color: aqua; !important" width="100px" @click="salvar">Salvar</button>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            dadosPessoais: {
                nome: ''
            }
        }
    },
    methods: {
        async salvar(e) {
            await axios.post('http://localhost:3004/dadosPessoais', this.dadosPessoais);
        }
    }
}
</script>

<style>
</style>
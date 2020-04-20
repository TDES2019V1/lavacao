<template>
    <div class="registro">
        <input type="text" placeholder="nome proprietario" v-model="nome"><br>
        <input type="text" placeholder="placa do veiculo" v-model="placa"><br>
        <input type="text" placeholder="telefone" v-model="telefone"><br>
        <input type="color" v-model="cor"><br>
        <input type="date" placeholder="data" v-model="data"><br>
        <input type="time" placeholder="horario" v-model="hora"><br>
        <button @click="registraEntrada">Salvar</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            registro: [],
            nome: '',
            placa: '',
            cor: '',
            telefone: '',
            data: '',
            hora: ''
        }
    }, methods: {
        registraEntrada: function() {
            this.registro.push({
                nome: this.nome,
                placa: this.placa,
                telefone: this.telefone,
                data: this.data,
                hora: this.hora
            })

            this.$store.commit("cadastrarVeiculo", {
                placa: this.placa,
                cor:  `background: ${this.cor}` 
            })

            alert("Entrada registrada")
        }
    }
}
</script>

<style>
.registro {
    margin-left: 20px;
}
</style>
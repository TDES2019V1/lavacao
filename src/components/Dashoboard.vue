<template>
  <div class="container">
      <div class="veiculo" v-for="veiculo in veiculos" :key="veiculo.placa" :style="veiculo.cor">
          {{veiculo.placa}}
      </div>
  </div>
</template>

<script>
export default {
    computed: {
        veiculos() {
            return this.$store.state.veiculos
        }
    }
}
</script>

<style scoped>
    .container {
        width: 400px;
        height: 300px;
        border: 1px solid #000;
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
    }
    .veiculo {
        min-width: 50px;
        height: 50px;
        border: 1px solid #000;
        margin-left: 5px;
    }
</style>
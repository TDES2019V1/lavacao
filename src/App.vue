<template>
  <div id="app">
    <dashboard/>
    <registro/>
  </div>
</template>

<script>
import Dashboard from "./components/Dashoboard.vue"
import Registro from "./components/Registro.vue"

export default {
  name: 'App',
  components: {
    Dashboard, Registro
  }
}
</script>

<style>
  #app {
    display: flex;
  }
</style>

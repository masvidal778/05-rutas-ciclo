<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PokemonLayout"
})
</script>

<template>
<div class="pokemon-layout">
  <h1>Pokemon Layout</h1> <!-- Només existeix on tingui relació amb Pokemon -->
  <router-view></router-view> <!-- Child routes in PokemonLayout -->
</div>
</template>

<style scoped>
.pokemon-layout {
  background-color: darkcyan;
}
</style>
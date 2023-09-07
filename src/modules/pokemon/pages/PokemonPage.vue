<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PokemonPage",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      //id: this.$route.params.id
    }
  },
  created() {
   /*
    const { id } = this.$route.params

    console.log(id)
    this.id = id


    */
  }
})
</script>

<template>
<h1>Pokemon Page <span>#{{ id }}</span> </h1>
</template>

<style scoped>

</style>
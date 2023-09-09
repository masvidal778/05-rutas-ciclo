<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AboutPage",
  data(){
    return{
      name: 'Núria'
    }
  },
  methods: {
    onChangeName(){
      this.name = 'Judit'
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
    //Peticions HTTP
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
    //per fer alguna neteja en el component
  },
  errorCaptured(){
    console.log('errorCaptured')
  },
  renderTracked(){
    console.log('renderTracked')
  },
  renderTriggered(){
    console.log('renderTriggered')
  }

})
</script>

<template>
  <h1>About Page</h1>
  <hr>
  <h2>{{ name }}</h2>
  <button @click="onChangeName">
    Canviar nom
  </button>
</template>

<style scoped>

</style>
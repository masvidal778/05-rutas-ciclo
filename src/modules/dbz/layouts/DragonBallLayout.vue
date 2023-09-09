<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "DragonBallLayout"
})
</script>

<template>
<div class="dbz-layout">
  <h1>DBZ Layout</h1>
  <router-view></router-view>
</div>
</template>

<style scoped>
.dbz-layout{
  background-color: darkorange;
}
</style>
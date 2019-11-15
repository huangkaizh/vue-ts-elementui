<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'

@Component({
  name: 'App'
})
export default class extends Vue {}
</script>

<style scoped>
.test > p {
  background-color: aqua;
}
</style>

<style lang="less" scoped>
.test > p {
  color: red;
}
</style>

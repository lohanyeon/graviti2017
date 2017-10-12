<template>
  <div id="app">
    <ul>
      <li><router-link v-bind:to="{ name: 'Index' }">index</router-link></li>
      <li><router-link v-bind:to="{ name: 'About' }">about</router-link></li>
      <li><router-link v-bind:to="{ name: 'Work' }">work</router-link></li>
      <li><router-link v-bind:to="{ name: 'WorkDetail' }">work_detail</router-link></li>
      <li><router-link v-bind:to="{ name: 'Contact' }">contact</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

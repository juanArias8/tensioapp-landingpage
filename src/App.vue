<template>
  <div id="app">
    <Landing></Landing>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');

  #app {
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    overflow-x: hidden;
  }
</style>

<script>
  import Landing from '@/views/Landing'

  export default {
    components: { Landing }
  }
</script>

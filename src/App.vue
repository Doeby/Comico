<template>
  <div id="app">
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  Vue.config.devtools = true
  export default {
    name: 'app',
    data () {
      return {
      }
    }
  }
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.heroes {
  column-count: 1;
  column-gap: 1em;
}
.wrapper {
  padding: 15px;
}
@media only screen and (min-width: 500px) {
  .heroes {
    column-count: 2;
  }
}
@media only screen and (min-width: 700px) {
  .heroes {
    column-count: 3;
  }
}
@media only screen and (min-width: 900px) {
  .heroes {
    column-count: 4;
  }
}
@media only screen and (min-width: 1100px) {
  .heroes {
    column-count: 5;
  }
}
</style>

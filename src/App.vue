<template>
  <div id="app">
    <header>
      <span>Comico</span>
    </header>
    <main>
      <div class="wrapper">
        <div class="heroes">
          <hero v-for="hero in lists" :key="hero" :list="hero"></hero>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import data from './db.json'
  import hero from './components/Hero'
  import axios from 'axios'

  export default {
    name: 'app',
    data () {
      return {
        lists: []
      }
    },
    created () {
      axios.get(`https://gateway.marvel.com:443/v1/public/characters?apikey=8359b3bd195afdccc4eedc2695f3f0c1`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.lists = response.data
        })
        .catch(e => {
          this.lists = data
        })
    },
    components: {
      hero
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

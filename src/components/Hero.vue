<template>
  <div class="wrapper">
    <div class="heroes">
      <div class="hero" v-for="hero in lists" :key="hero" :list="hero">
        <div class="heroDetails">
          <a href="/details" class="link">
            <img v-bind:src="list.thumbnail.path + '/landscape_large' + '.jpg'" :alt="list.name"  @error="imageLoadError">
            <h4>{{ list.name }}</h4>
            <p>{{ list.description }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import her from './db2.json'

  export default {
    name: 'hero',
    data () {
      return {
        lists: []
      }
    },
    async created () {
      try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&offset=0&apikey=8359b3bd195afdccc4eedc2695f3f0c1`)
        this.lists = response.data.data.results
      } catch (e) {
        this.lists = her
      }
    },
    methods: {
      imageLoadError (e) {
        console.log('Image failed to load')
        let defaultURL = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
        if (e.target.src !== defaultURL) {
          e.target.src = defaultURL
        }
      }
    }
  }
</script>

<style scoped>
  .hero {
    background: #F5F5F5;
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
    cursor: pointer;
    -webkit-perspective: 1000;
    -webkit-backface-visibility: hidden;
    transition: all 100ms ease-in-out;
  }
  .hero:hover {
    transform: translateY(-0.5em);
    background: #EBEBEB;
  }
  img {
    display: block;
    width: 100%;
  }

  .link{
    text-decoration: none;
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

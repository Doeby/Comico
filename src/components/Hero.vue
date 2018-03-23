<template>
  <div class="hero">
    <div class="heroDetails">
      <img :src="list.thumbnail.path + '/landscape_incredible.jpg'" :alt="list.name">
      <h4>{{ list.name }}</h4>
      <p>{{ list.description }}</p>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['list'],
      name: 'hero'
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
</style>

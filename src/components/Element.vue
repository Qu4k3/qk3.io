<template>
  <div class="element">    
    <img :src="image" v-bind:alt="title"/>
    <h3 v-html="title" class="title"></h3>
    <p v-html="description" class="description"></p>
  </div>
</template>

<script>
export default {
  name: 'Element',
  props: {
    title: String,
    description: String,
    objective: String,
    url: String,
    image: String,
    repo: String,
    tags: Array,
    status: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 20px 0 0;
}
a {
  color: #42b983;
}
</style>

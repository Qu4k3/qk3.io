<template>
  <article class="element">    
    <a :href="url"><img :src="image" class="main-img" v-bind:alt="title"/></a>
    <h3 v-html="title" class="title"></h3>
    <p v-html="description" class="description"></p>
  </article>
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
.element {
  flex: 0 1 calc(100%);
  margin-bottom: 20px;
}
.element .main-img {
  max-height: 150px;
  max-width: 150px;
  height: auto;
  display: block;
  margin: 0 auto;
}
h3 {
  margin: 20px 0 0;
}
a {
  color: #42b983;
}



@media screen and (min-width: 576px) {
  .element {
    flex: 0 1 calc(50% - 1em);
  }
}
@media screen and (min-width: 768px) {
  .element {
    flex: 0 1 calc(33% - 1em);
  }
}
@media screen and (min-width: 992px) {
  .element {
    flex: 0 1 calc(33% - 1em);
  }
}
@media screen and (min-width: 1200px) {
  .element {
    flex: 0 1 calc(25% - 1em);
  }
}
</style>

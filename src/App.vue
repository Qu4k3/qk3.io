<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="elements">
      <Element
        v-for="data in myJson"
        v-bind:key="data.title"
        v-bind:title="data.title"
        v-bind:description="data.description"
        v-bind:objective="data.objective"
        v-bind:url="data.url"
        v-bind:image="data.image"
        v-bind:repo="data.repo"
        v-bind:tags="data.tags"
        v-bind:status="data.status"
      />
    </div>
  </div>
</template>

<script>
import Element from './components/Element.vue'
import json from './json/elements.json'

export default {
  name: 'app',
  data(){
    return{
      myJson: json
    }
  },
  components: {
    Element
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.elements {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>

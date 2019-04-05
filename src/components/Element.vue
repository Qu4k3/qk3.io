<template>
  <article class="element">    
    <img :src="image" class="main-img" v-bind:alt="title"/>
    <h3 v-html="title" class="title"></h3>
    <p v-html="description" class="description"></p>
    <p><span class="objective info">Objective</span><span v-html="objective"></span></p>
    <a :href="url" class="btn-launch">Launch →</a>
    <span v-html="status" v-bind:class="statusColor" class="label status"></span>
    <span v-html="started" class="label started info"></span>
    <a :href="repo" class="repo" target="_blank"><i class="fab fa-github"></i><i class="far fa-external-link-alt"></i></a>
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
    status: String,
    statusColor: String,
    started: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.element {
  flex: 0 1 calc(100%);
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
}
.element .main-img {
  max-height: 150px;
  max-width: 150px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.status {
  position: absolute;
  top: -27px;
  left: 0;
}
.started {
  position: absolute;
  top: 3px;
  left: 0;
}
.repo {
  position: absolute;
  top: 33px;
  left: 0;
  font-size: 22px;
  color: #222;
}
.repo .fa-external-link-alt {
  color: #aaa;
  font-size: .5em;
  vertical-align: top;
  margin-left: 2px;
}
/*
.repo::after {
  content: '\f35d';
  color: #aaa;
    position: absolute;
  top: 33px;
  left: 20px;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  font-family: "Font Awesome 5 Pro";
  font-size: .6em;
}*/

.btn-launch {
  border: 2px solid #42b983;
  border-radius:3px;
  padding: .5rem 1.3rem;
  margin-top: 10px;
  display: inline-block;
  text-decoration: none;
  color: #42b983;
  transition: .2s;
}

.btn-launch:hover,
.btn-launch:focus {
  background-color: #42b983;
  color: #fff;
}

h3 {
  margin: 20px 0 0;
}
a {
  color: #42b983;
}

.label {
  font-family: 'SourceSansPro', 'Avenir', Helvetica, Arial, sans-serif;
  border-radius: 3px;
  font-weight: 400;
  padding: 2px 5px;
  border-left: 3px solid;
}

.objective {
  border-radius: 3px;
  font-weight: 400;
  padding: 1px 5px 2px;
  margin-right: 4px;
  border-left: 3px solid;
}

.ok {
  background-color: rgba(0, 200, 81, .1);
  border-color: rgba(0, 200, 81, .8);
}

.warn {
  background-color: rgba(255, 187, 51, .1);
  border-color: rgba(255, 187, 51, .8);
}

.dang {
  background-color: rgba(255, 68, 68, .1);
  border-color: rgba(255, 68, 68, .8);
}

.info {
  background-color: rgba(51, 181, 229, .1);
  border-color: rgba(51, 181, 229, .8);
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
    flex: 0 1 calc(25% - 1em);
  }
}
@media screen and (min-width: 1200px) {
  .element {
    flex: 0 1 calc(25% - 1em);
  }
}
</style>

<template>
  <article class="element">    
    <img :src="image" class="main-img" v-bind:alt="title"/>
    <h3 v-html="title" class="title"></h3>
    <span class="sep"></span>
    <h4 v-html="description" class="description"></h4>
    <p><span class="objective info">Objective</span><span v-html="objective"></span></p>
    <a :href="url" v-html="btn" class="btn-launch"> →</a>
    <span v-html="status" v-bind:class="statusColor" class="label status"></span>
    <span v-html="started" class="label started info"></span>
    <a :href="repo" class="repo" target="_blank"><i class="fab fa-github"></i><i class="far fa-external-link-alt"></i></a>
    <div class="services"><img src="../assets/services/vue.png" alt="vue" /><img src="../assets/services/nodejs.png" alt="nodejs" /><img src="../assets/services/netlify.png" alt="netlify" /></div>
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
    started: String,
    btn: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.element {
  flex: 0 1 calc(100%);
  margin: 30px 0;
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
  color: #333;
}
.repo .fa-external-link-alt {
  color: #aaa;
  font-size: .5em;
  vertical-align: top;
  margin-left: 2px;
}

.btn-launch {
  border: 2px solid #42b983;
  border-radius: 25px;
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

.sep {
  border-top: 2px solid #42b983;
  width: 10%;
  display: inline-block;
  border-radius: 3px;
  margin-bottom: -3px;
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

.services {
  position: absolute;
  top: -27px;
  right: 0;
  display: flex;
  flex-direction: column;  
  align-items: center;
  justify-content: center;
}

.services > * {
  margin-bottom: 7px;
}

.services img {
  max-height: 25px;
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

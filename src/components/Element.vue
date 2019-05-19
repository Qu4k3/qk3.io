<template>
  <div class="wrapper">
    <article class="element">    
    <div class="col">
      <span class="img-helper"></span>
      <img :src="image" class="main-img" v-bind:alt="title"/>
    </div>
    <div class="col">
      <div class="meta">
        <a :href="repo" class="repo" target="_blank"><i class="fab fa-github"></i><i class="far fa-external-link-alt"></i></a>
        <!--<span v-html="status" v-bind:class="statusColor" class="label status"></span>-->
        <span v-html="started" class="label started info"></span>        
      </div>
      <div class="services"><img src="../assets/services/vue.svg" alt="vue" /><img src="../assets/services/nodejs.svg" alt="nodejs" /><img src="../assets/services/netlify.svg" alt="netlify" /></div>
      <div class="content">
        <h3 v-html="title" class="title"></h3>
        <span class="sep"></span>
        <h4 v-html="description" class="description"></h4>
      </div>
      <a :href="url" v-html="btn" class="btn-launch"> →</a>      
    </div>
  </article>
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
    status: String,
    statusColor: String,
    started: String,
    btn: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-grow: 1;
  flex-basis: 0;
  padding: 15px;
  max-width: 370px;
  margin-bottom: 10px;
}

.element {
  flex: 1 1;  
  margin: 15px auto 15px;
  position: relative;
  background-color: #f6f6f6;
  padding: 15px;
  display: flex;
  border-radius: 3px;
  align-items: flex-start;
    margin: 0 auto;
}

.element .col {
  flex: 1 1 auto;
}

.element .col:first-child {
  height: 100%;
}

.img-helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.element .main-img {
  max-height: 150px;
  max-width: 150px;
  height: auto;
  margin: 0 auto;
  vertical-align: middle;
}

.repo {
  font-size: 22px;
  color: #333;
}
.repo .fa-external-link-alt {
  color: #aaa;
  font-size: .5em;
  vertical-align: top;
  margin-left: 2px;
}

.meta {
  margin-bottom: 10px;
  text-align: right;
}

.meta > * {
  margin-left: 10px;
  margin-bottom: 7px;
  display: inline-block;
}

.meta > *:first-child {
  margin-left: 0;
}

.description {
  margin-bottom: 25px;
}

.content {
  text-align: auto;
}

.btn-launch {
  position: absolute;
  bottom: -18px;
  right: -15px;
  width: 120px;
  border: 2px solid #42b983;
  border-radius: 25px;
  padding: .5rem 1.3rem;
  margin-top: 10px;
  display: inline-block;
  text-decoration: none;
  color: #42b983;
  transition: .2s;
  background: #fff;
}

.btn-launch:hover,
.btn-launch:focus {
  background-color: #42b983;
  color: #fff;
}

h3 {
  margin: 0;
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
  display: inline-block;
}

.services {
  text-align: right;
}

.services > * {
  margin-bottom: 7px;
  margin-right: 10px;
}

.services > *:last-child {
  margin-right: 0;
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

.obj {
  background-color: rgba(191, 85, 236, .1);
  border-color: rgba(191, 85, 236, .8);
}

@media screen and (max-width: 575px) {
  .wrapper {
    margin: 0 auto 10px auto;
  }
}
  
@media screen and (min-width: 576px) {
  .wrapper {
    flex: 1 1 calc(33.333% - 20px);
  }
}
@media screen and (min-width: 768px) {
  .wrapper {
    flex: 1 1 calc(33.333% - 20px);
  }
}
@media screen and (min-width: 992px) {
  .wrapper {
    flex: 1 1 calc(33.333% - 20px);
  }
}
@media screen and (min-width: 1200px) {
  .wrapper {
    flex: 1 1 calc(25% - 20px);
  }
}
</style>

<template>
  <div id="app">
    <div class="container">
      <!--<img alt="Vue logo" src="./assets/logo.png">-->
      <h1>Qk3.io</h1>
      <h2>Below are listed projects that are actually hosted under this domain</h2>
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
    <footer>
      <div class="container">
        <div class="copyright">
          <ul>
              <li>Coded with ❤️ in Barcelona</li>
              <li>&copy; <span id="year">2019</span></li>
          </ul>
        </div>
        <div class="social">
          <ul>
            <li>
              <a href="https://sourcerer.io/qu4k3" target="_blank"><img alt="Sourcerer.io" src="../src/assets/services/sourcerer-io.png"></a>
            </li>
            <li>  
              <a class="github" href="https://github.com/Qu4k3" target="_blank"><i class="fab fa-github"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>    
  </div>
</template>

<script>
import Element from './components/Element.vue'
import json from './json/data.json'

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
* {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: 'SourceSansPro-Light';
  font-display: auto;
  src: url('./assets/fonts/SourceSansPro-Light.ttf');
  src: url('./assets/fonts/SourceSansPro-Light.ttf?#iefix') format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: 'SourceSansPro-Regular';
  font-display: auto;
  src: url('./assets/fonts/SourceSansPro-Regular.ttf');
  src: url('./assets/fonts/SourceSansPro-Regular.ttf?#iefix') format('truetype');
  font-weight: 400;
}

body {
  font-family: 'SourceSansPro-Regular', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

body::before{
  content: '';
  top: 0;
  height: 5px;
  width: 100%;
  position: absolute;
background: rgb(66,185,131);
background: linear-gradient(90deg, rgba(66,185,131,1) 0%, rgba(56,239,125,1) 100%);
}

h1              { font-family: 'SourceSansPro-Light', 'Avenir', Helvetica, Arial, sans-serif; font-weight: 300; font-size: 2em; margin: .67em 0 }
h2              { font-family: 'SourceSansPro-Light', 'Avenir', Helvetica, Arial, sans-serif; font-weight: 300; font-size: 1.5em; margin: .75em 0 }
h3              { font-family: 'SourceSansPro-Light', 'Avenir', Helvetica, Arial, sans-serif; font-weight: 300; font-size: 1.17em; margin: .83em 0 }
h4, p,
blockquote, ul,
fieldset, form,
ol, dl, dir,
menu            { margin: 1.12em 0 }
h5              { font-size: .83em; margin: 1.5em 0 }
h6              { font-size: .75em; margin: 1.67em 0 }

*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #42b883;
}

*::-webkit-scrollbar-corner {
  background-color: #42b883;
}

*::-webkit-scrollbar-thumb {
  background-color: #42b883;
}

*::-webkit-scrollbar-track {
  background-color: #eaecef;
}

*::-webkit-scrollbar-track-piece {
  background-color: #eaecef;
}

.container {
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
}

#app {
  text-align: center;
  margin-top: 20px;
}

#app > .container {
    display: flex;
  flex-direction: column;  
  align-items: center;
  justify-content: center;
}

.elements {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

footer {
  margin-top: 40px;
  /*background-color: #f8f8f8;*/
  border-top: 1px solid #eaecef;
  padding: 15px 0;
  width: 100%;
}

footer > .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

footer ul {
  padding: 0;
}

footer ul li {
  list-style: none;
  display: inline-block;
}

footer ul li {
  margin-right: 10px;
}

footer ul li:last-child {
  margin-right: 0;
}

footer .copyright {
  margin-right: 15px;
}

footer .social svg {
  font-size: 25px;
}

footer .social img {
  max-height: 21px;
  display: inline-flex;
  width: auto;
  margin: auto;
}
/*
* {
  outline: 1px solid red;
}*/
</style>

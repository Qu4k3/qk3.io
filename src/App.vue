<template>
  <div id="app" v-bind:class="{ 'theme-dark' : nightMode }">      
    <div class="container">
      <input type="checkbox" class="tgl tgl-flat" id="theme-toggle" v-model="nightMode">
      <label class="tgl-btn" for="theme-toggle"><span></span></label>
      <!--<img alt="qk3.io logo" src="./assets/logo.png">-->
      <h1>Qk3.io</h1>
      <h2>Below are listed projects that are actually hosted under this domain</h2>
      <div class="elements">
        <Element
          v-for="data in dataJson"
          v-bind:key="data.title"
          v-bind:title="data.title"
          v-bind:description="data.description"
          v-bind:objective="data.objective"
          v-bind:url="data.url"
          v-bind:image="data.image"
          v-bind:repo="data.repo"
          v-bind:tags="data.tags"
          v-bind:status="data.status.label"
          v-bind:statusColor="data.status.color"
          v-bind:started="data.started"
          v-bind:btn="data.btn"
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
              <a class="github" href="https://github.com/Qu4k3" target="_blank"><i class="fab fa-github"></i><span>Visit profile</span></a>
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
      dataJson: json
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

:root {
  --night-text-color: #eef6ff;
  --night-background-color: #1c2532;
  --night-border-color: #eef6ff1f;
}

@font-face {
  font-family: 'SourceSansPro';
  font-display: auto;
  src: url('./assets/fonts/SourceSansPro-Light.ttf');
  src: url('./assets/fonts/SourceSansPro-Light.ttf?#iefix') format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'SourceSansPro';
  font-display: auto;
  src: url('./assets/fonts/SourceSansPro-Regular.ttf');
  src: url('./assets/fonts/SourceSansPro-Regular.ttf?#iefix') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'SourceSansPro';
  font-display: auto;
  src: url('./assets/fonts/SourceSansPro-SemiBold.ttf');
  src: url('./assets/fonts/SourceSansPro-SemiBold.ttf?#iefix') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'SourceSansPro';
  font-display: auto;
  src: url('./assets/fonts/SourceSansPro-Bold.ttf');
  src: url('./assets/fonts/SourceSansPro-Bold.ttf?#iefix') format('truetype');
  font-weight: 700;
  font-style: normal;
}

/* Remove  ↓  */
html, body {
  height: 100%;
}

#app {
  min-height: 100%;
}
/* Remove  ↑  */

body {
  font-family: 'SourceSansPro', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-weight: 400;
  font-size: 16px;  
}

#app.theme-dark {
  background-color: var(--night-background-color);
  color: var(--night-text-color);
}

#app.theme-dark footer {
  border-top: 1px solid var(--night-border-color);
}

#app.theme-dark .repo {
  color: var(--night-text-color);
}

#app.theme-dark footer .github {
  color: var(--night-text-color);
  border: 1px solid var(--night-text-color);
}

#app.theme-dark footer .github:hover,
#app.theme-dark footer .github:focus {
  background-color: var(--night-text-color);
  color: #222;
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

h1              { font-weight: 300; font-size: 2em; margin: .67em 0 }
h2              { font-weight: 300; font-size: 1.5em; margin: .75em 0 }
h3              { font-weight: 300; font-size: 1.35em; margin: .83em 0 }
h4              { font-weight: 600}
h4, p,
blockquote, ul,
fieldset, form,
ol, dl, dir,
menu            { margin: 1.12em 0; line-height: 1.4em; }
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

.tgl {
  display: none;
}
.tgl, .tgl:after, .tgl:before, .tgl *, .tgl *:after, .tgl *:before, .tgl + .tgl-btn {
  box-sizing: border-box;
}
.tgl::-moz-selection, .tgl:after::-moz-selection, .tgl:before::-moz-selection, .tgl *::-moz-selection, .tgl *:after::-moz-selection, .tgl *:before::-moz-selection, .tgl + .tgl-btn::-moz-selection {
  background: none;
}
.tgl::selection, .tgl:after::selection, .tgl:before::selection, .tgl *::selection, .tgl *:after::selection, .tgl *:before::selection, .tgl + .tgl-btn::selection {
  background: none;
}
.tgl + .tgl-btn {
  outline: 0;
  display: block;
  width: 4em;
  height: 2em;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.tgl + .tgl-btn:after, .tgl + .tgl-btn:before {
  position: relative;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
}
.tgl + .tgl-btn:after {
  left: 0;
}
.tgl + .tgl-btn:before {
  display: none;
}
.tgl:checked + .tgl-btn:after {
  left: 50%;
  content: "\f186";
  font-family: "Font Awesome 5 Pro";
  color: #fff;
  line-height: 25px;
}
.tgl-flat + .tgl-btn {
  position: absolute;
  top: 25px;
  right: 15px;
  padding: 2px;
  transition: all .2s ease;
  background: transparent;
  border: 2px solid rgba(66, 185, 131, .6);
  border-radius: 2em;
}
.tgl-flat + .tgl-btn:after {
  transition: all .2s ease;
  background: rgba(66, 185, 131, .6);
  content: "\f185";
  font-family: "Font Awesome 5 Pro";
  color: #fff;
  line-height: 25px;
  border-radius: 1em;
}
.tgl-flat:checked + .tgl-btn {
  border: 2px solid #42b883;
}
.tgl-flat:checked + .tgl-btn:after {
  left: 50%;
  background: #42b883;
}

.container {
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  position: relative;
}

#app {
  text-align: center;
  padding-top: 20px;
}

#app > .container {
  display: flex;
  flex-direction: column;  
  align-items: center;
  justify-content: center;
}

.elements {
  margin-top: 30px;
  display: flex;
  /*align-items: center;*/
  justify-content: space-between;
  flex-wrap: wrap;
}

footer {
  margin-top: 40px;
  /*background-color: #f8f8f8;*/
  border-top: 1px solid #eaecef;
  padding: 10px 0;
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

footer .github {
  vertical-align: middle;
  text-decoration: none;
  color: #333;
  border: 1px solid #333;
  border-radius: 3px;
  padding: 4px 8px;
  transition: .2s;
  white-space: nowrap;
}

footer .github span {
  margin-left: 7px;
}

footer .github:hover,
footer .github:focus {
  background-color: #333;
  color: #fff;
}
/*
* {
  outline: 1px solid red;
}*/
</style>

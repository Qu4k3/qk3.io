import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
	el: "#toggle",
	watch: {
		nightMode: function() {
			localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
		}
	},
	data: {
		nightMode: localStorage.getItem("nightMode") || false,
	},
});

document.getElementById("year").innerHTML = new Date().getFullYear();
import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import jquery from 'jquery'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from 'vue-router'
Vue.use(Router)

window.jquery = jquery
window.bootstrap = bootstrap

createApp(App).mount('#app')

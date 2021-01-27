import { createApp } from 'vue'
import App from './App.vue'
import jquery from 'jquery'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

window.jquery = jquery
window.bootstrap = bootstrap

createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import jquery from 'jquery'
import bootstrap from 'bootstrap'

window.jquery = jquery
window.bootstrap = bootstrap

createApp(App).mount('#app')

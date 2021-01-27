import { createApp } from 'vue'
import App from './App.vue'
import jquery from 'jquery'
import bootstrap from 'bootstrap'
import popper from '@popperjs/core'
window.jquery = jquery
window.bootstrap = bootstrap
window.popper = popper
createApp(App).mount('#app')

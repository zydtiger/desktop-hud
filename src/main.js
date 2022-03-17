import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/utils/spacingjs'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faXmark)

createApp(App).use(router).component('fa-icon', FontAwesomeIcon).mount('#app')

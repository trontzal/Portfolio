import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/globales.scss'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { inject } from '@vercel/analytics';
inject();
library.add(faLinkedin, faGithub);


createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


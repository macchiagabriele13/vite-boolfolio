import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/js/src/dropdown'
import { router } from './router'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMeteor } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMeteor)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

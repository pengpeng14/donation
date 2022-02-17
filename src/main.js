import Home from './Home.vue'

import Vue from 'vue'
import {router} from './routes'
import VueMoment from 'vue-moment'
import {firestorePlugin} from 'vuefire'
import {store} from './stores'


Vue.use(VueMoment)
Vue.use(firestorePlugin)

new Vue({
  el: '#app',
  render: h => h(Home),
  router,
  store
})

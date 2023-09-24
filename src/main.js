import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import StoreP from './StoreP.js'
import Mixin from './Mixins/Mixin.js'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import { CSwitch, CButton } from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/css/bootstrap.rtl.css'
import '../src/assets/css/style.css'
import '../src/assets/lib/animate/animate.min.css'
import '../src/assets/lib/animate/animate.css'
import '../src/assets/lib/flaticon/font/flaticon.css'
import '../src/assets/lib/owlcarousel/assets/owl.carousel.min.css'
import '../src/assets/lib/lightbox/css/lightbox.min.css'
import '../src/assets/css/fonts.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.use(StoreP)
app.use(Mixin)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('CButton', CButton)
app.component('CSwitch', CSwitch)

app.mount('#app')

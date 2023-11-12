import { createApp } from 'vue'
import UserMenu from './usermenu.vue'
import router from '../../router'
import '../../assets/scss/main.scss'

createApp(UserMenu)
    .use(router)
    .mount('#usermenu')


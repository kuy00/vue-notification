import { createApp } from 'vue'
import App from './App.vue'
import Notifications from '../../dist/index.esm'

const app = createApp(App)
app.use(Notifications)
app.mount('#app')

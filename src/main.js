import Notification from './Notification.vue'
import events from './events'

const Notifications = {
  install: (app, options) => {
    app.component('Notification', Notification)
    app.config.globalProperties.$notification = (options) => {
      events.emit('push', options)
    }
  },
}

export default Notifications

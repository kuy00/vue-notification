[![npm version](https://badge.fury.io/js/@kuy472013%2Fvue-notification.svg)](https://badge.fury.io/js/@kuy472013%2Fvue-notification)
[![npm](https://img.shields.io/npm/dm/@kuy472013/vue-notification)](https://www.npmjs.com/package/@kuy472013/vue-notification)

# Vue.js Notification

<p align="center">
  <img src="https://user-images.githubusercontent.com/27402363/156883079-18baaf9a-2cb5-44fb-b16c-735cfcbb3443.gif">
</p>
This allows settings that do not require individual settings, such as the size, location, and animation of the notification, to be set through props, and is designed to allow individual notification styles to be specified through API.

## Setup

package install
```bash
npm install --save @kuy472013/vue-notification
```

`main.js`
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import Notifications from '@kuy472013/vue-notification'

const app = createApp(App)
app.use(Notifications)
```

`App.vue`
```vue
<Notification />
```

## Usage

You can show notifications by calling the registered view plugin.
```vue
<template>
  <div id='app'>
    <button @click='test()'>test</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    test: function () {
      this.$notification()
    }
  }
}
</script>
```

## Props

Common notification settings can be changed using props.
```vue
<Notification
  position='left-bottom'
  :duration=5000
/>
```
| Name         | Type     | Default         | Description                                                                                                                                                                   |
| ------------ | -------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width        | Number   | 250             | Option to set the width of the notification element.<br>(must be a numeric, unit: px)                                                                                            |
| height       | Number   | 50              | Option to set the heigth of the notification element.<br>(must be a numeric, unit: px)                                                                                           |
| position     | String   | center-bottom   | Option to specify where the notification element will be shown.<br>Please enter a combination of the values below.<br>X: ['left', 'right', 'center']<br>Y: ['top', 'bottom']  |
| speed        | Number   | 1000            | Option to set the animation duration of the notification element.<br>(unit: ms)                                                                                                  |
| duration     | Number   | 3000            | Option to set how long the notification element stays on the screen.<br>(unit: ms)                                                                                               |

## API

API provided by notification plugin.
```vue
app.$notification({
  type: 'success',
  classes: 'customStyle',
  contents: message,
})
```
| Name         | Type            | Default         | Description                                                                                                                                                                   |
| ------------ | --------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type         | String          | info            | You can use the notification plugin to set among the types of notifications provided by default.<br>supported types : success, error, warning, info                           |
| classes      | String          | null            | You can set up a separate class using the notification plugin to specify custom styles.                                                                                       |
| contents     | String          | message         | You can configure the content of the notification using the notification plugin.                                                                                              |
| component    | Vue Component   | null            | By using the notification plugin, you can use a component created separately from the design provided by default.                                                             |

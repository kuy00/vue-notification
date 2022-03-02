<template>
  <div id='app'>
    <Notification
      position='left-bottom'
      :duration=5000
    />
    <Test />
  </div>
</template>

<script>
import Test from './Test.vue'

export default {
  name: 'App',
  components: {
    Test,
  },
}
</script>

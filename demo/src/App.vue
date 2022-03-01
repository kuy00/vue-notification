<template>
  <div id='app'>
    <Notification position='right-bottom'/>
    <Test style="float: right" />
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

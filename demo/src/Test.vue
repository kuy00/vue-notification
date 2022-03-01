<template>
  <div>
    <button v-on:click='notification1()'>success</button>
    <button v-on:click='notification2()'>error</button>
    <button v-on:click='notification3()'>warning</button>
    <button v-on:click='notification4()'>info</button>
    <button v-on:click='notification5()'>custom</button>
  </div>
</template>

<script>
import { success, error, warning, info, custom } from './notification'
import Custom from './notification/component/Custom.vue'

export default {
  name: 'Test',
  methods: {
    notification1: function () {
      success(this, 'success message')
    },
    notification2: function () {
      error(this, 'error message')
    },
    notification3: function () {
      warning(this, 'warning message')
    },
    notification4: function () {
      info(this, 'info message')
    },
    notification5: function () {
      custom(this, Custom, 'custom message')
    },
  },
}
</script>

<style>
  .customStyle {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: green;
    line-height: 50px;
  }
  .customStyle img {
    margin-left: 20px;
    vertical-align: middle;
  }
  .customStyle span {
    margin-left: 20px;
    color: white;
    vertical-align: middle;
  }
</style>

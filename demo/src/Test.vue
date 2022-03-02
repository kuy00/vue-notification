<template>
  <div class='btn-group'>
    <button class='btn btn-success' v-on:click='notification1()'>success</button>
    <button class='btn btn-error' v-on:click='notification2()'>error</button>
    <button class='btn btn-warning' v-on:click='notification3()'>warning</button>
    <button class='btn btn-info' v-on:click='notification4()'>info</button>
    <button class='btn btn-custom' v-on:click='notification5()'>custom</button>
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
      error(this, 'error<BR>exceptoin: server error')
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
  .btn {
    border: none;
    margin: 10px;
    width: 120px;
    height: 40px;
    font-size: 20px;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn-success {
    background-color: #2ee659;
  }
  .btn-error {
    background-color: #f52a40;
  }
  .btn-warning {
    background-color: #ffd04f;
  }
  .btn-info {
    background-color: #a1a1a1;
  }
  .btn-custom {
    background-color: black;
  }
</style>

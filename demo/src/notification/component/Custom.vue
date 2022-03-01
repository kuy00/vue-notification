<template>
  <div class='custom'>
    <span>custom</span><br>
    <span v-html='option.contents' />
  </div>
</template>

<script>
export default {
  name: 'Custom',
  props: {
    option: {},
    type: {},
  },
}
</script>

<style>
  .custom {
    border-radius: 5px;
    background-color: lightgray;
    padding: 5px;
  }
</style>

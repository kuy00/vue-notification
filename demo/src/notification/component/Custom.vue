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
    background-color: black;
    padding: 14px 0px;
  }
  .custom span {
    margin: 0px 20px;
    color: white;
  }
</style>

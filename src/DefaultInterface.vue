<template>
  <div
    :class='option.classes'
    :style='styles'
  >
    <img :src='type.image' width="22" height="22" />
    <span v-html='option.contents' />
  </div>
</template>

<script>
export default {
  name: 'DefaultInterface',
  props: {
    type: {},
    option: {},
  },
  computed: {
    styles: function () {
      const styles = {
        backgroundColor: this.type.backgroundColor,
      }
      return this.option.classes === 'notification' ? styles : {}
    },
  },
}
</script>

<style>
  .notification {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    line-height: 50px;
  }
  .notification img {
    vertical-align: middle;
    margin-left: 20px;
  }

  .notification span {
    margin-left: 20px;
    font-size: 16px;
    color: white;
    vertical-align: middle;
  }
</style>

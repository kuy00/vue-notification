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
    display: flex;
    width: 100%;
    border-radius: 5px;
    padding: 14px 0px;
  }
  .notification img {
    margin-left: 20px;
    align-self: center;
  }

  .notification span {
    margin: 0px 20px;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: white;
    align-self: center;
  }
</style>

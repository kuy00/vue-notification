<template>
  <transition-group
    @before-enter='beforeEnter'
    @after-enter='afterEnter'
    @leave='leave'
  >
    <div
      ref='item'
      v-for='item in queue'
      :key='item'
      :style='defineStyles'
    >
      <component
        v-if='item.isVisible'
        :is='item.option.component'
        :type='item.type'
        :option='item.option'
      />
    </div>
  </transition-group>
</template>

<script>
import events from './events'
import { getType } from './types'
import { getOption } from './options'
import { pixelToPercent, parsePosition } from './utils'
import DefaultInterface from './DefaultInterface.vue'

export default {
  name: 'Notification',
  props: {
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 50,
    },
    position: {
      type: String,
      default: 'center-bottom',
    },
  },
  data: function () {
    return {
      queue: [],
      windowWidth: window.innerWidth,
    }
  },
  mounted: function () {
    events.on('push', this.push)
    window.addEventListener('resize', this.handleResize)
  },
  computed: {
    defineStyles: function () {
      const width = pixelToPercent(this.windowWidth, this.width)
      const location = parsePosition(this.position, width)
      const styles = {
        ...location,
        position: 'absolute',
        width: this.width + 'px',
        height: this.height + 'px',
      }
      return styles
    },
  },
  methods: {
    push: function (options) {
      const option = { ...getOption(options) }
      const type = { ...getType(option.type) }
      option.component = option.component || DefaultInterface

      this.queue.push({
        isVisible: true,
        option: option,
        type: type,
      })
    },
    handleResize: function () {
      this.windowWidth = window.innerWidth
    },
    beforeEnter: function (el) {
      console.log('befor enter')
      el.style.opacity = 0
    },
    afterEnter: function (el) {
      console.log('after enter')
      const queueLength = this.queue.length - 1
      this.$refs.item.forEach((element, key) => {
        const translate = (queueLength - key) * (this.height + 10)
        element.style.transform = `translateY(-${translate}px)`
      })
      el.style.opacity = 1
      el.style.transition = 'all 1000ms'

      setTimeout(() => {
        this.isVisible = false
      }, 5000)
    },
    leave: function (el, done) {
      console.log('leave')
      el.style.opacity = 0
      el.style.transform = 'translateY(10px)'
      el.style.transition = 'all 1000ms'
    },
  },
}
</script>

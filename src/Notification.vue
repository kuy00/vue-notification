<template>
  <transition-group
    @before-enter='beforeEnter'
    @after-enter='afterEnter'
    @leave='leave'
  >
    <div
      ref='items'
      v-for='item in queue'
      :key='item'
      :style='defineStyles'
    >
      <component
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
import { shallowRef } from 'vue'

export default {
  name: 'Notification',
  props: {
    width: {
      type: Number,
      default: 250,
    },
    height: {
      type: Number,
      default: 50,
    },
    position: {
      type: String,
      default: 'center-bottom',
    },
    speed: {
      type: Number,
      default: 1000,
    },
    duration: {
      type: Number,
      default: 3000,
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
      option.component = shallowRef(option.component || DefaultInterface)

      this.queue.push({
        option: option,
        type: type,
      })
    },
    handleResize: function () {
      this.windowWidth = window.innerWidth
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    afterEnter: function (el) {
      const queueLength = this.queue.length - 1
      const operator = this.position.indexOf('bottom') !== -1 ? '-' : ''

      this.$refs.items.forEach((item, key) => {
        const translate = (queueLength - key) * this.height + 10 * (this.queue.length - key)
        item.style.transform = `translateY(${operator}${translate}px)`
      })
      el.style.opacity = 1
      el.style.transition = `all ${this.speed}ms`

      setTimeout(() => {
        this.queue.shift()
      }, this.duration)
    },
    leave: function (el, done) {
      el.style.opacity = 0
      el.style.transform = 'translateY(0px)'
    },
  },
}
</script>

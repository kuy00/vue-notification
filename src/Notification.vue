<template>
  <transition-group
    @before-enter='beforeEnter'
    @after-enter='afterEnter'
    @leave='leave'
  >
    <div
      ref='items'
      v-for='(item, index) in queue'
      :key='item'
      :style='defineStyles'
    >
      <component
        :is='item.option.component'
        :type='item.type'
        :option='item.option'
        v-on:click='unset(index)'
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
      timer: [],
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
        'min-width': this.width + 'px',
        'min-height': this.height + 'px',
        'max-width': '500px',
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
      el.style.opacity = 1
      el.style.transition = `all ${this.speed}ms`
      this.animation()

      const timer = setTimeout(() => {
        this.queue.shift()
        this.timer.shift()
      }, this.duration)
      this.timer.push(timer)
    },
    leave: function (el, done) {
      el.remove()
      this.animation()
    },
    unset: function (index) {
      clearTimeout(this.timer[index])
      this.timer.splice(index, 1)
      this.queue.splice(index, 1)
    },
    animation: function () {
      const operator = this.position.indexOf('bottom') !== -1 ? '-' : ''
      const reserveItems = Object.values(this.$refs.items).reverse()
      let stackedHeight = 0
      let translate = 0

      reserveItems.forEach((item, key) => {
        translate = stackedHeight + 10 * (key + 1)
        item.style.transform = `translateY(${operator}${translate}px)`
        stackedHeight += item.offsetHeight
      })
    },
  },
}
</script>

<template>
  <div @click.stop="printInfo">
    <div class="item" v-for="item of list" :key="item.title">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        <span>{{item.title}}</span>
        <div v-if="item.children">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
    <div class="ticket-info-wrapper" v-show="showInfo" @click.stop="closeInfo">
      <div class="ticket-info">
        {{ticketInfo}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  data () {
    return {
      ticketInfo: '',
      showInfo: false
    }
  },
  methods: {
    printInfo (e) {
      e = e || window.event
      const target = e.target || e.srcElement
      if (target.nodeName.toLowerCase() === 'span') {
        this.ticketInfo = '亲，' + target.innerHTML + '已售罄！'
        this.showInfo = true
      }
    },
    closeInfo () {
      this.showInfo = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .ticket-info-wrapper
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 99
    background: rgba(0, 0, 0, .6)
    .ticket-info
      display: flex
      justify-content: space-around
      flex-direction: column
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
      height: 4rem
      width: 6rem
      padding: 0 .2rem
      margin: auto
      text-align: center
      background: #fff
      border-radius: .1rem
  .item
    line-height: .8rem
    padding: 0 .2rem
    font-size: .32rem
    .item-title-icon
      display: inline-block
      position: relative
      width: .36rem
      height: .36rem
      top: .06rem
      left: 0
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
</style>

<template>
  <div>
    <div class="item" v-for="item of list" :key="item.title">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
        <div v-if="item.children">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
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

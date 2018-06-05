<template>
  <div class="list" ref="scrollWrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="item-list">
          <div class="item-wrapper">
            <div class="item">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="item-list">
          <div class="item-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="item">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="alphabet" v-for="subItem of item" :key="subItem.id">
          <div class="letter border-bottom">{{subItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  data () {
    return {
      // hotCities
    }
  },
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.scrollWrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      text-indent: .2rem
      background: #eee
      color: #666
      font-size: .26rem
    .item-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .item-wrapper
        float: left
        width: 33.3%
        .item
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .alphabet
      .letter
        line-height: .76rem
        text-indent: .2rem
</style>

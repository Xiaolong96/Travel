<template>
  <div class="icons">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="pageItem of page" :key="pageItem.id">
          <div class="icon-img"><img :src="pageItem.src" alt=""></div>
          <p class="icon-desc">{{pageItem.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      var pages = []
      this.iconList.forEach((item, index) => {
        var page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    width: 100%
    height: 4.2rem
    // height: 0
    // padding-bottom: 52%
  .icons >>> .swiper-pagination-bullet
    width: 6px !important
    height: 6px !important
  .icon
    position: relative
    float: left
    overflow: hidden
    width: 25%
    height: 1.8rem
    // height: 0
    // padding-bottom: 22%
    .icon-img
      position: absolute
      top: .1rem
      left: 0
      right:0
      bottom: .32rem
      box-sizing: content-box
      padding: .1rem
      img
        display: block
        position:absolute;
        left:50%;
        top:50%;
        width: 1rem
        height: 1rem
        margin: -.5rem 0 0 -.5rem
    .icon-desc
      position: absolute
      left: 0
      right:0
      bottom: 0
      height: .32rem
      line-height: .32rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>

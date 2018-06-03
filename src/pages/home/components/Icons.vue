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
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      iconList: [{
        id: '1',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门景点'
      }, {
        id: '2',
        src: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '必游榜单'
      }, {
        id: '3',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '踏青赏花'
      }, {
        id: '4',
        src: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '5',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      }, {
        id: '6',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        desc: '故宫'
      }, {
        id: '7',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        desc: '主题乐园'
      }, {
        id: '8',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '名胜古迹'
      }, {
        id: '9',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        desc: '演出'
      }, {
        id: '10',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        desc: '自然风光'
      }]
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
    height: 0
    padding-bottom: 52%
  .icons >>> .swiper-pagination-bullet
    width: 6px !important
    height: 6px !important
  .icon
    position: relative
    float: left
    overflow: hidden
    width: 25%
    height: 0
    padding-bottom: 22%
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
        height: 100%
        margin: 0 auto
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

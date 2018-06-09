<template>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_600x330_d5e0d52e.jpg" alt="">
    <div class="banner-info">京东石林峡(AAAA景区)</div>
    <div class="banner-num"><span class="iconfont banner-icon">&#xe633;</span>33</div>
    <gallary :imgs="imgs" v-if="gallaryShow" @close="gallaryClose"></gallary>
  </div>
</template>

<script>
import gallary from '@/common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      gallaryShow: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1803/f6/f61e1477839c26f8a3.img.jpg_r_800x800_1d14c6c8.jpg', 'http://img1.qunarzz.com/sight/p0/1803/94/945a15e226359ea9a3.img.jpg_r_800x800_40c44190.jpg', 'http://img1.qunarzz.com/sight/p0/1803/86/8681b5be50d9021ba3.img.jpg_r_800x800_f0236013.jpg']
    }
  },
  components: {
    gallary
  },
  methods: {
    handleBannerClick () {
      this.gallaryShow = true
    },
    gallaryClose () {
      this.gallaryShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      bottom: 0
      left: 0
      right: 0
      height: .6rem
      color: #fff
      padding: 0 .2rem
      font-size: .36rem
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-num
      position: absolute
      left: .2rem
      bottom: .6rem
      margin-bottom: .1rem
      padding: 0 .3rem
      line-height: .4rem
      border-radius: .2rem
      background: rgba(0, 0 ,0 , .5)
      font-size: .24rem
      color: #fff
      .banner-icon
        font-size: .26rem
        padding-right: .1rem
</style>

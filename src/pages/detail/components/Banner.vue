<template>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="bannerImgUrl" alt="">
    <div class="banner-info">{{sightName}}</div>
    <div class="banner-num"><span class="iconfont banner-icon">&#xe633;</span>{{this.gallaryImgs.length}}</div>
    <gallary :imgs="gallaryImgs" v-if="gallaryShow" @close="gallaryClose"></gallary>
  </div>
</template>

<script>
import gallary from '@/common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImgUrl: String,
    gallaryImgs: Array
  },
  data () {
    return {
      gallaryShow: false
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

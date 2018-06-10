<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImgUrl="bannerImgUrl" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header :sightTitle="sightTitle"></detail-header>
    <div class="test">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      sightTitle: '',
      sightName: '',
      bannerImgUrl: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.sightTitle = data.sightTitle
        this.sightName = data.sightName
        this.bannerImgUrl = data.bannerImgUrl
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
    .test
      height: 20rem
</style>

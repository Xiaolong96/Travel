<template>
  <div>
    <div class="search-wrapper">
      <input class="input-search" v-model="keyword" type="text" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" v-show="keyword" ref="searchContent">
      <ul>
        <li class="search-item border-bottom" v-for="item of searchList" :key="item.id" @click="handleClick(item.name)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      searchList: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  updated () {
    this.scroll = new Bscroll(this.$refs.searchContent)
  },
  computed: {
  },
  watch: {
    keyword () {
      if (!this.keyword) {
        this.searchList = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const res = []
        for (let i in this.cities) {
          this.cities[i].forEach((e) => {
            if (e.name.indexOf(this.keyword) > -1 || e.spell.indexOf(this.keyword) > -1) {
              res.push(e)
            }
          })
        }
        if (!res.length) {
          this.searchList = []
          this.searchList.push({id: '1', name: '没有搜索到相关城市哦 ^-^'})
        } else {
          this.searchList = res
        }
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .search-wrapper
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .input-search
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      color: #666
      border-radius: .06rem
  .search-content
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    background: #eee
    .search-item
      line-height: .64rem
      text-indent: .2rem
      background: #fff
</style>

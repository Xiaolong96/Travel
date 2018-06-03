<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="recItem of recommendList" :key="recItem.id">
        <img class="item-img" :src="recItem.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{recItem.title}}</p>
          <p class="item-desc">{{recItem.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    height: .8rem
    line-height: .8rem
    text-indent: .2rem
    background: #eee
  .item
    overflow: hidden
    display: flex
    width: 100%
    height: 2.2rem
    .item-img
      display: block
      width: 1.8rem
      height: 1.8rem
      padding: .2rem
    .item-info
      flex: 1
      padding: .2rem
      min-width: 0  //？
      .item-title
        line-height: .6rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .5rem
        color: #ccc
        ellipsis()
      .item-btn
        line-height: .4rem
        margin-top: .2rem
        background: #ff9300
        padding: 0 .1rem
        border-radius: .06rem
        color: #fff
</style>

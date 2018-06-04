<template>
  <div class="header">
    <div class="header_left">
      <div class="iconfont back_icon">&#xe624;</div>
    </div>
    <div class="header_input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header_right">
        {{city}}
        <span class="iconfont arrow_icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .header
    display: flex
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header_left
      width: .64rem
      float: left
      .back_icon
        text-align: center
        font-size: .4rem
    .header_input
      flex: 1
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      height: .62rem
      line-height: .62rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header_right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .arrow_icon
        font-size: .24rem
</style>

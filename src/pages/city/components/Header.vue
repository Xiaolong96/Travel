<template>
  <div class="header">
    城市列表
    <router-link to="/">
      <div class="header_left">
        <div class="iconfont back_icon">&#xe624;</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .header
    width: 100%
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    text-align: center
    color: #fff
    .header_left
      width: .64rem
      float: left
      color: #fff
      .back_icon
        text-align: center
        font-size: .4rem
</style>

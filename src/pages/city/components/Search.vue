<template>
  <div class="search-wrapper">
    <input class="input-search" type="text" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
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
</style>

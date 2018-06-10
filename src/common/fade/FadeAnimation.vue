<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
  .fade-enter, .fade-leave-to
    opacity: 0
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
  .fade-leave, .fade-enter-to
    opacity: 1
</style>

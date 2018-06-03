<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.src" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '01',
        src: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
        title: '寻找北京的皇城范儿',
        desc: '数百年的宫廷庙宇，至今依旧威严霸气'
      }, {
        id: '02',
        src: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
        title: '学生最爱的博物馆',
        desc: '周末干嘛？北京很多博物馆已经免费开放啦'
      }, {
        id: '03',
        src: 'http://img1.qunarzz.com/sight/source/1507/18/2d554e22faa25f.jpg_r_640x214_2a966a54.jpg',
        title: '爱上庄园',
        desc: '庄园让臭美的你秒变白富美，高富帅'
      }]
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
  .item-img-wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .2rem
    .item-title
      line-height: .6rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .5rem
      color: #999
      ellipsis()
</style>

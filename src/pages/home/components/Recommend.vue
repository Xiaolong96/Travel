<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="recItem of recommendList" :key="recItem.id">
        <img class="item-img" :src="recItem.src" alt="">
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
  data () {
    return {
      recommendList: [{
        id: '01',
        src: 'http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_200x200_331422ad.jpg',
        title: '京东石林峡',
        desc: '谷内山峰挺立峭拔，天上美景落人间'
      }, {
        id: '02',
        src: 'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg',
        title: '古北水镇',
        desc: '弄堂小道曲径通幽，古建大宅庭院深深'
      }, {
        id: '03',
        src: 'http://img1.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_200x200_788cb0d2.jpg',
        title: '十渡风景区',
        desc: '秋天的孤山寨蓝天白云映衬，还可欣赏红叶美景'
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

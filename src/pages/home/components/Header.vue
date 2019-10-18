<template>
  <div class="header">
    <div class="header-left">Back
        <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        Content
    </div>
    <div class="header-right">
        City
        <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    display flex
    line-height .86rem
    background #00bcd4
    color #fff
    .header-left
      width .64rem
    .header-input
      flex 1
      height .64rem
      margin-top .12rem
      line-height .64rem
      margin-left .2rem
      background #fff
      border-radius .1rem
      color #ccc
    .header-right
      width 1.24rem
      float right
      text-align center
</style>

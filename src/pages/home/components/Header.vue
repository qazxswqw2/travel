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

<style>
  .header {
    height: 50px;
  }
  .header-input {
    padding: 4%;
    width: 200px;
  }
  .header-left {
    padding: 4%;
    float: left;
  }
  .header-right {
    float: right;
    height: 10px;
    padding-bottom: 20px;
  }
</style>

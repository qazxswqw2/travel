<template>
  <div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://i.ytimg.com/vi/ohw41O6tZjM/mqdefault.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://i.ytimg.com/vi/PK09cd26VyM/mqdefault.jpg'
      }]
    }
  }
}
</script>

<style>
  .swiper-pagination-bullet-active{
      background: #fff;
  }
  .wrapper{
      overflow: hidden;
      width: 100%;
      background: #eee;
  }
  .swiper-img{
      width: 100%
  }
</style>

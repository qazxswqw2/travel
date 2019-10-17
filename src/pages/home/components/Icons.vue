<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
                <img class="icon-img-content" :src='item.imgUrl' />
            </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
        </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://bigginscotthq.com.au/storage/keywords/24.png?1566799368',
        desc: 'Adobe Promotion'
      }, {
        id: '0002',
        imgUrl: 'https://bigginscotthq.com.au/storage/keywords/7.png?1566798459',
        desc: 'Check'
      }, {
        id: '0003',
        imgUrl: 'https://bigginscotthq.com.au/storage/keywords/25.png?1566798182',
        desc: 'Company'
      }, {
        id: '0004',
        imgUrl: 'https://bigginscotthq.com.au/storage/keywords/26.png?1566798487',
        desc: 'Corflutes'
      }, {
        id: '0005',
        imgUrl: 'https://bigginscotthq.com.au/storage/keywords/24.png?1566799368',
        desc: 'Adobe'
      }, {
        id: '0006',
        imgUrl: 'https://bigginscotthq.com.au/storage/keywords/7.png?1566798459',
        desc: 'Check'
      }, {
        id: '0007',
        imgUrl: 'https://bigginscotthq.com.au/storage/keywords/25.png?1566798182',
        desc: 'Company'
      }, {
        id: '0008',
        imgUrl: 'https://bigginscotthq.com.au/storage/keywords/26.png?1566798487',
        desc: 'Corflutes'
      }, {
        id: '0009',
        imgUrl: 'https://bigginscotthq.com.au/storage/keywords/21.png?1566798020',
        desc: 'Flags'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped>
    .icons {
        padding-top: .1rem;
    }
    .swiper-container{
        height: 0;
        padding-bottom: 50%;
    }
    .icon{
        height: 0;
        position: relative;
        overflow: hidden;
        float: left;
        width: 25%;
        padding-bottom: 25%;
    }
    .icon-img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
        box-sizing: border-box;
        padding: .1rem;
    }
    .icon-img-content{
        display: block;
        margin: 0 auto;
        height: 100%;
    }
    .icon-desc{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: .44rem;
        line-height: .44rem;
        color: #333;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>

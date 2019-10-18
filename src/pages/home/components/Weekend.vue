<template>
    <div>
        <div class="title">Local Area</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
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
      recommendList: [{
        id: '0001',
        imgUrl: 'https://bigginscotthq.com.au/storage/posts/th_1568778039.jpg',
        title: 'Online Training',
        desc: 'Online training for all the agents'
      }, {
        id: '0002',
        imgUrl: 'https://bigginscotthq.com.au/storage/posts/th_1568778039.jpg',
        title: 'Online Training',
        desc: 'Online training for all the agents'
      }, {
        id: '0003',
        imgUrl: 'https://bigginscotthq.com.au/storage/posts/th_1568778039.jpg',
        title: 'Online Training',
        desc: 'Online training for all the agents'
      }]
    }
  }
}
</script>

<style scoped>
    .title {
        margin-top: .2rem;
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
    }
    .item-img-wrapper {
        overflow: hidden;
        height: 0;
        padding-bottom: 33.9%;
    }
    .item-img {
        width: 100%;
    }
    .item-info {
        padding: .1rem;
    }
    .item-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: .54rem;
        font-size: .32rem;
    }
    .item-desc {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: .4rem;
        color: #ccc;
    }
</style>

<template>
    <div>
        <div class="title">Training</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">Details</button>
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
    .item {
        overflow: hidden;
        display: flex;
        height: 1.9rem;
    }
    .item-img {
        width: 1.7rem;
        height: 1.7rem;
        padding: .1rem;
    }
    .item-info {
        min-width: 0;
        flex: 1;
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
    .item-button {
        line-height: .44rem;
        margin-top: .16rem;
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        color: #fff;
    }
</style>

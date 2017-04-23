<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <router-link class="tab-item" to="/goods">商品</router-link>
      <router-link class="tab-item" to="/ratings">评价</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from 'components/header/Header';
  import axios from 'axios';

  const ERR_OK = 0;

  export default {
    components: {
      'v-header': Header
    },
    data() {
      return {
        seller: {}
      };
    },
    created() {
      axios.get('/api/seller').then(response => {
        response = response.data;
        if (response.errno === ERR_OK) {
          this.seller = response.data;
        }
      });
    }
  };
</script>

<style lang="less">
@import "./common/less/mixin.less";

#app {
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    .border-1px(rgba(7, 17, 27, 0.1));

    .tab-item {
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: rgb(77, 85, 93);

      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>

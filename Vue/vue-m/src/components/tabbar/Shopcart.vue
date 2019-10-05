<template>
  <div class="shopCar">
    <div class="mui-card" v-for="(item,i) in list" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 选中状态 -->
          <mt-switch
            v-model="$store.getters.getSelect[item.id]"
            @change="getChangeSel(item.id,$store.getters.getSelect[item.id])"
            ref="selectd"
          ></mt-switch>

          <img :src="item.thumb_path" alt />
          <div class="info">
            <h3>{{item.title}}</h3>
            <P>
              <span class="price">￥{{item.sell_price}}</span>
              <numBox :count="$store.getters.getInitCount[item.id]" :goodsId="item.id"></numBox>
              <a href="#" @click.prevent="removeShop(item.id,i)">删除</a>
            </P>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card all">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="sell">
            <span>总计（不含运费）</span>
            <p>
              已选商品
              <span>{{$store.getters.getCountAndPrice.count}}</span>件，总价
              <span>￥{{$store.getters.getCountAndPrice.price}}</span>元
            </p>
          </div>

          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numBox from "../subComponents/carNumBox.vue";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    //获取购物车中所有商品列表并加载
    getGoodsList() {
      var ids = [];

      this.$store.state.car.forEach(item => ids.unshift(item.id));
      // 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
      if (ids.length === 0) {
        return;
      }

      this.$http.get("api/goods/getshopcarlist/" + ids.join(",")).then(res => {
        if (res.body.status === 0) {
          this.list = res.body.message;
        }
      });
    },
    //删除商品
    removeShop(id, i) {
      this.list.splice(i, 1);
      this.$store.commit("remove", id);
    },
    getChangeSel(id, val) {
      this.$store.commit("changeSel", { id, isSelect: val });
    }
  },
  components: {
    numBox
  }
};
</script>

<style lang="less" scoped>
.shopCar {
  .mui-card-content-inner {
    align-items: center;
    display: flex;
    justify-content: space-between;
    img {
      width: 60px;
      margin: 0 5px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        font-size: 13px;
        font-weight: bold;
      }
      .mui-numbox {
        width: 110px;
      }
      .price {
        color: red;
        font-weight: bold;
      }
    }

    .sell {
      &:first-child {
        color: #aaa;
      }
      p {
        color: #aaa;
        span {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="count"
      @change="getChangeCount"
      ref="numbox"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../../lib/mui/js/mui.js";
export default {
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  methods: {
    getChangeCount() {
      this.$store.commit("upDataCount", {
        id: this.goodsId,
        count: parseInt(this.$refs.numbox.value)
      });
    }
  },
  props: ["count", "goodsId"]
};
</script>

<style lang="less" scoped>
</style>
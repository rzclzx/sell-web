<template>
  <div class="infolist">
    <el-tabs v-model="activeName">
      <el-tab-pane class="box" label="全部" name="0">
        <div v-for="(v, index) in list" :key="index">
          <h3 class="bgray pl20 h30 lh30">{{ v.name }}</h3>
          <div class="flex-start-center-no bd-b-g1-0" v-for="(j, number) in v.foods" :key="number">
            <img class="w100 h100 m20" :src="j.icon" />
            <div>
              <div>{{ j.name }}</div>
              <div class="mt10 cred">{{ "¥ " + j.price }}</div>
            </div>
            <div class="flex-end-center-no flexgrow1 pr10">
              <count :id="j.id" @add="add(j)" @del="del(j)"></count>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane class="box" v-for="(v, index) in list" :key="index" :label="v.name" :name="(index + 1) + ''">
        <div>
          <h3 class="bgray pl20 h30 lh30">{{ v.name }}</h3>
          <div class="flex-start-center-no bd-b-g1-0" v-for="(j, number) in v.foods" :key="number">
            <img class="w100 h100 m20" :src="j.icon" />
            <div>
              <div>{{ j.name }}</div>
              <div class="mt10 cred">{{ "¥ " + j.price }}</div>
            </div>
            <div class="flex-end-center-no flexgrow1 pr10">
              <count :id="j.id" @add="add(j)" @del="del(j)"></count>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <calcu></calcu>
  </div>
</template>

<script>
  import ProductApi from "@/assets/js/axios/product";
  import calcu from "@/components/calcu";
  import count from "@/components/count";
  import Util from "@/assets/js/util";

  export default {
    name: 'product-infoList',
    data () {
      return {
        activeName: '0',
        list: []
      }
    },
    computed: {
      productList() {
        return this.$store.state.sell.productList
      }
    },
    components: {
      calcu,
      count
    },
    methods: {
      add (j) {
        let productList = Util.deepCopy(this.productList)
        productList.push(j)
        this.$store.commit('SET_PRODUCTLIST', productList)
      },
      del (j) {
        let productList = Util.deepCopy(this.productList)
        productList = Util.removeListById(j.id, productList)
        this.$store.commit('SET_PRODUCTLIST', productList)
      }
    },
    created () {
      ProductApi.productInfoList().then(res => {
        this.list = res.data || [];
      });
    }
  }
</script>
<style lang="less" scoped>
    .box{
        overflow-x: hidden;
        overflow-y: auto;
        height: 500px;
    }
</style>


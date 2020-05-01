<template>
  <div class="flex-between-center-no bgray3">
    <div class="cwhite pl20">{{ "¥ " + util.getTotal() }}</div>
    <el-button type="success" @click="toBalance">去结算</el-button>
  </div>
</template>

<script>
  import Util from '@/assets/js/util'
  export default {
    name: 'calcu',
    data () {
      return {
        util: Util
      }
    },
    methods: {
      toBalance() {
        this.$router.push('/index/order/create')
      }
    },
    created () {
      
    }
  }
</script>
<style lang="less" scoped>
    .el-button{
        border-radius: 0!important;
    }
</style>


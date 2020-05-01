<template>
  <div class="flex-between-center-no mr10">
   <div @click="del" class="iconfont icon-minus-circle-fill pointer"></div>
   <div class="ml20">{{ getCount() }}</div>
   <div @click="add" class="iconfont icon-plus-circle-fill ml20 pointer"></div>
  </div>
</template>

<script>
  import Util from "@/assets/js/util";

  export default {
    name: 'count',
    data () {
      return {
        
      }
    },
    props: ['id'],
    computed: {
      productList () {
        return this.$store.state.sell.productList
      }
    },
    methods: {
      add () {
          this.$emit('add')
      },
      del () {
          this.$emit('del')
      },
      getCount () {
        let count = 0
        let productList = Util.deepCopy(this.productList)
        productList.forEach(item => {
          if (item.id == this.id) {
            count++
          }
        })
        return count
      }
    },
    created () {
      this.getCount()
    }
  }
</script>
<style lang="less" scoped>
    .btn {
        border-radius: 50%;
        background-color: #000000;
    }
</style>


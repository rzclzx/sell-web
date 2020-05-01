<template>
  <div class="box">
    <router-view/>
  </div>
</template>

<script>
import OrderApi from '@/assets/js/axios/order'
export default {
  name: 'index'
}
</script>

<style lang="less" scoped>
    .box{
        width: 80%;
        margin: 20px auto;
    }
</style>


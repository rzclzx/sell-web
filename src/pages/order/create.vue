<template>
  <div>
    <el-card>
        <div slot="header">
            <span>收货人详情</span>
        </div>
        <el-form :model="formData" :rules="rules" ref="form">
            <div class="flex-start-center-no">
                <div class="w100 text-right mr10">收货人:</div>
                <el-form-item prop="name" class="w280">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
            </div>
            <div class="flex-start-center-no mt20">
                <div class="w100 text-right mr10">电话:</div>
                <el-form-item prop="phone" class="w280">
                    <el-input v-model="formData.phone"></el-input>
                </el-form-item>
            </div>
            <div class="flex-start-center-no mt20">
                <div class="w100 text-right mr10">地址:</div>
                <el-form-item prop="addr" class="w280">
                    <el-input v-model="formData.addr"></el-input>
                </el-form-item>
            </div>
        </el-form>
    </el-card>
    <el-card class="mt20">
        <div slot="header">
            <span>订单详情</span>
        </div>
        <div class="mt20 flex-end-center-no bd-b-g1-0 lh40">
            <div class="mr10">总计： </div>
            <div class="mr10">{{ '¥ ' + util.getTotal() }}</div>
        </div>
        <div v-for="(item, index) in list" :key="index" class="flex-between-center-no bd-b-g1-0 lh40">
            <div class="ml10">{{ item.name + ' × ' + item.num }}</div>
            <div class="mr10">{{ '¥ ' + util.mul(item.price, item.num) }}</div>
        </div>
    </el-card>
    <div class="mt20 flex-end-center-no">
        <el-button type="primary" @click="confirm">确定</el-button>
    </div>
  </div>
</template>

<script>
  
  import OrderApi from '@/assets/js/axios/order'
  import Util from '@/assets/js/util'

  export default {
    name: 'order-create',
    data () {
      return {
        util: Util,
        rules: {
          name: [
            { required: true, message: '请输入收货人', trigger: 'change' }
          ],
          phone: [
            { required: true, message: '请输入电话', trigger: 'change' }
          ],
          addr: [
            { required: true, message: '请输入地址', trigger: 'change' }
          ]
        },
        formData: {},
        list: []
      }
    },
    components: {
      
    },
    computed: {
        productList () {
            return this.$store.state.sell.productList
        }
    },
    methods: {
        confirm () {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    OrderApi.orderCreate({
                        name: this.formData.name,
                        phone: this.formData.phone,
                        addr: this.formData.addr,
                        openid: new Date().getTime().toString(),
                        items: this.getItems()
                    }).then(res => {
                        
                    }, err => {
                        this.$message.error(err.msg)
                    })
                } 
            });
        },
        getItems () {
            let list = this.util.deepCopy(this.list)
            list = list.map(item => {
                let obj = {
                    productId: item.id,
                    productQuantity: item.num
                }
                return obj
            })
            return list
        }
    },
    created () {
        let productList = this.productList
        this.list = this.util.mergeById(productList)
    }
  }
</script>
<style lang="less" scoped>
    
</style>


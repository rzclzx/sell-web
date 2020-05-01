import AxiosInit from './config'
import ConfigInit from './api'

const api = ConfigInit()

let axios = AxiosInit({
  url: api.baseUrl
})

let OrderApi = {
    orderCreate(data) {
        return axios.post('sell/buyer/order/create', data)
    },
    queryOrder(data) {
        return axios.get('sell/buyer/order/query', {
            params: data
        })
    }
}

export default OrderApi
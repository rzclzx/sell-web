import AxiosInit from './config'
import ConfigInit from './api'

const api = ConfigInit()

let axios = AxiosInit({
  url: api.baseUrl
})

let UserApi = {
  getContractAllList () {
    return axios.post('/contract/with/param/list')
  }
}

export default UserApi
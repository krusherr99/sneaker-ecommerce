import axios from 'taro-axios';

const service = axios.create({
  baseURL: 'http://172.20.10.11:8080'
})

service.interceptors.request.use(
  (config) => { console.log(config);return config },
  (err) => { console.log(err); }
)


service.interceptors.response.use(
  (resp) => {
    if (resp.data.success === true) {
      return resp.data.data
    }
  },
  (err) => {
    return Promise.reject(err)
  }
)

export const getProductById = (id) => {
  console.log(id);
  return service.get(`/product/${id}`)
}

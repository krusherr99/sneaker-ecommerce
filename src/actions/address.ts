import actionTypes from '../constants/address'
import axios from 'taro-axios'

const init = (payload) => {
  return {
    type: actionTypes.INITADDRESS,
    payload
  }
}

export const backward = () => {
  return {
    type: actionTypes.BACKWARD
  }
}

export const changeAddress = (addressId) => {
  return {
    type: actionTypes.CHANGEADDRESS,
    payload: { addressId }
  }
}

// export const updateAddress = () => {
//   return (dispatch) => {
//     axios.post(``)
//   }
// }

export const initAddress = () => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/address?userId=${5}`)
      .then(resp => {
        let addressId
        (resp.data.data as Array<any>).forEach((item) => {
          if(item.default === true) {
            addressId = item.id
          }
        }) 
        dispatch(init({ addressId, addressList: resp.data.data }))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
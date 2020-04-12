import actionTypes from '../constants/address'

// interface Address {
//   id: number,
//   userId: number,
//   name: string,
//   phone: string,
//   province: string,
//   city: string,
//   district: string,
//   detailAddress: string,
//   default: true
// }

const INITIAL_STATE = {
  addressId: 0,
  addressList: []
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.INITADDRESS:
      return {
        ...state,
        ...action.payload
      }
    case actionTypes.CHANGEADDRESS:
      return Object.assign({}, state, {
        ...action.payload
      })
    default:
      return state
  }
} 
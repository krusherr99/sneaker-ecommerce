import actionTypes from '../constants/address'

const INITIAL_STATE = {
  addressId: 0,
  addressList: []
}


export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
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
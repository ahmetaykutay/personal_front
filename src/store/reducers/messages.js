import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../utility'

const initialState = {
  show_message: false,
  message: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MESSAGE: return updateObject(state, { show_message: action.bool })
    case actionTypes.SET_MESSAGE: return updateObject(state, { message: { type: action.messageType, text: action.messageText } })
    default:
      return state
  }
}

export default reducer
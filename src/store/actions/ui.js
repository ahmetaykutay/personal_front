import * as actionTypes from './actionTypes'

export const showMessage = (messageType, messageText) => dispatch => {
  dispatch({
    type: actionTypes.SET_MESSAGE,
    messageType: messageType,
    messageText: messageText
  })
  dispatch({ type: actionTypes.SHOW_MESSAGE, bool: true })
  setTimeout(() => {
    dispatch({ type: actionTypes.SHOW_MESSAGE, bool: false })
  }, 3000)
}
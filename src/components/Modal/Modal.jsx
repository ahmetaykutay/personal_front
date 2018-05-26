import React from 'react'
import './Modal.css'

const modal = (props) => {
  return props.show 
  ? <div className={`Modal fadeIn ${props.mType}`} ><p>{props.messageText}</p></div>
  : null
}

export default modal
import React from 'react'
import './Spinner.css'

const spinner = (props) => {
  return (
    <div className="Spinner" style={props.color ? { backgroundColor: props.color } : null}></div>
  )
}

export default spinner
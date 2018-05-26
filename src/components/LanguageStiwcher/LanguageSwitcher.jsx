import React from 'react'
import './LanguageSwitcher.css'

const languageSwitcher = (props) => {
  return (
    <select
      defaultValue={localStorage.language ? localStorage.language : 'en'}
      className="LanguageSwitcher" name="language" onChange={(e) => props.onChange(e.target.value)} >
      <option value="en">EN</option>
      <option value="tr" >TR</option>
    </select>
  )
}

export default languageSwitcher
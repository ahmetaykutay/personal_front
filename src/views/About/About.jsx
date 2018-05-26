import React from 'react'
import './About.css'
import { FormattedMessage } from 'react-intl'

const about = (props) => {
  return (
    <div className="fadeIn Page About">
      <h1 className="slideDown"><FormattedMessage id="aboutPage.title" defaultMessage="About Me" /></h1>
      <img className="scaleOpen" src="/images/placeholder-face-big.png" alt="Profile" />
      <p className="slideUp"><FormattedMessage id="aboutPage.aboutMe" defaultMessage=" " /></p>
    </div>
  )
}

export default about
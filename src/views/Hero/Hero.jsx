import React from 'react'
import './Hero.css'
import { FormattedMessage } from 'react-intl'

const hero = (props) => {
  return (
    <div className="fadeIn">
      <div className="BgImage" style={{
        backgroundImage: "url('/images/web-design-2906159_1280.jpg')",
        filter: "grayscale(100%)"
      }}></div>
      <div className="Hero">
        <h1 className="scaleDown"><FormattedMessage id="homePage.title" defaultMessage="Welcome" /></h1>
      </div>
    </div>
  )
}

export default hero
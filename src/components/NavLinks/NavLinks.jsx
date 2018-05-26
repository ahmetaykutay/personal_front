import React from 'react'
import { NavLink } from "react-router-dom"
import routes from '../../routes'
import { FormattedMessage } from 'react-intl'

const nav_links = props => (
  <ul className={props.classes} >
    {routes.map((prop, key) => {
      if (prop.redirect) return null;
      return (
        <li key={key}>
          <NavLink
            className={key % 2 === 0 ? "rotateDown" : "rotateUp"}
            to={prop.path}
          ><FormattedMessage id={"nav." + prop.name} defaultMessage={prop.name} /></NavLink>
        </li>
      )
    })}
  </ul>
)

export default nav_links
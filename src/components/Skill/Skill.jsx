import React from 'react'
import './Skill.css'
import { FormattedMessage } from 'react-intl'

const skills = (props) => {
  const { title, skills } = props

  return (
    <div className="Skill">
      <h3 className="scaleUp">{title}</h3>
      <ul>
        {skills.map((skill, i) => (
          <li className="slideDown" key={i}>
            <FormattedMessage id={"skills." + props.skill + '.' + skill} defaultMessage={skill} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default skills
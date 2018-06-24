import React from 'react'
import Skill from '../../components/Skill/Skill'
import './Skills.css'
import { FormattedMessage } from 'react-intl'

const my_skilss = [
  ['Basics', ['HTML', 'CSS (sass)', 'JS ( es6 )', 'PHP']],
  ['Frontend', ['React', 'Redux', 'jQuery', 'Draft']],
  ['Backend', ['NodeJS', 'Express', 'mongoDB', 'Laravel']],
  ['Soft', ['Learning', 'Communication', 'Teamwork', 'Planning']],
  ['Tooling', ['Webpack', 'Git', 'Gulp & grunt']],
  ['Other', ['graphQL', 'WordPress ( theme, plugin )', 'Blade', 'Handlebars', 'C/C++', 'Bash', 'python']],
]

const skills = (props) => {
  const allMySkills = my_skilss.map((s, i) => (
    <Skill
      key={i}
      skill={s[0]}
      title={<FormattedMessage id={"skillsPage.subtitles." + s[0]} defaultMessage={s[0]} />}
      skills={s[1]} />
  ))

  return (
    <div className="fadeIn Page">
      <h1 className="slideUp"><FormattedMessage id="skillsPage.title" defaultMessage="My Skills" /></h1>
      <div className="SkillsContainer slideDown">
        {allMySkills}
      </div>
    </div>
  )
}

export default skills
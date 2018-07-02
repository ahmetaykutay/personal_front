import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import './Portfolio.css'

const projects = [
  {
    name: "Ildem Cillingir", image: "images/ildem_cilingir.png",
    link: "http://www.ildemcilingir.com/index.html"
  },
  {
    name: "Simon Game", image: "https://codepen.io/ladesa/pen/JrvPKa/image/small.png",
    link: "https://codepen.io/ladesa/full/JrvPKa"
  },
  {
    name: "Documentation", image: "https://codepen.io/ladesa/pen/QxvLqM/image/small.png",
    link: "https://codepen.io/ladesa/full/QxvLqM"
  },
  {
    name: "Product Landing Page", image: "https://codepen.io/ladesa/pen/OEWeKG/image/small.png",
    link: "https://codepen.io/ladesa/full/OEWeKG"
  },
  {
    name: "Survey Form", image: "https://codepen.io/ladesa/pen/qKqgvq/image/small.png",
    link: "https://codepen.io/ladesa/full/qKqgvq"
  },
]

class Portfolio extends Component {

  render() {
    return (
      <div className="fadeIn Page">
        <h1 className="slideUp"><FormattedMessage id="portfolioPage.title" defaultMessage="My Portfolio" /></h1>
        <div className="slideDown project-container">
          {projects.map((p, i) => (
            <div key={i} className="project-card" >
              <img src={p.image} alt={p.name} />
              <div className="gotoProject">
                <a target="_blank" href={p.link}>
                  <span>
                    Go to Project
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Portfolio
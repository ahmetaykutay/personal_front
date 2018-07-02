import React, { Component } from 'react'
import { connect } from 'react-redux'
import './MobileNav.css'
import NavLinks from '../NavLinks/NavLinks'
import { withRouter } from 'react-router'
import Social from '../SocialNetworks/SocialNetworks'
import LangSwitcher from '../LanguageStiwcher/LanguageSwitcher'

class MobileNav extends Component {
  state = {
    menuOpen: false
  }

  componentDidMount() {
    this.props.history.listen((location, action) => {
      this.setState({ menuOpen: false })
    })
  }

  onMenuIconClicked = (e) => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    const content_classes = this.state.menuOpen ? 'main-con open slideDown' : 'main-con'
    const classes = this.state.menuOpen ? "MobileNav slideDown open" : "MobileNav slideDown"

    return (
      <div className={classes}>
        <div className={`MenuIcon ${this.state.menuOpen ? "change" : ""}`} onClick={this.onMenuIconClicked}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className={content_classes}>
          <div className="mobile-lang-switcher">
            <LangSwitcher onChange={this.props.langChange} />
          </div>
          <NavLinks classes="MobileNavLinks" />
          <div className="social">
            <Social />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MobileNav)
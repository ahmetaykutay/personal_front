import React, { Component } from 'react'
import './MobileNav.css'
import NavLinks from '../NavLinks/NavLinks'
import { withRouter } from 'react-router'

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
    const links = this.state.menuOpen ? <NavLinks classes="MobileNavLinks slideDown" /> : null

    return (
      <div className="MobileNav">
        <div className={`MenuIcon ${this.state.menuOpen ? "change" : ""}`} onClick={this.onMenuIconClicked}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        {links}
      </div>
    )
  }
}

export default withRouter(MobileNav)
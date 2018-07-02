// core
import React, { Component } from 'react';
import { IntlProvider } from 'react-intl'
import { Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { RouteWithProps } from './utility'
import './App.css';
import './css/animations.css'
// components
import LanguageSwitcher from './components/LanguageStiwcher/LanguageSwitcher'
import Nav from './components/Nav/Nav'
import MobileNav from './components/MobileNav/MobileNav'
import Modal from './components/Modal/Modal'
import SocialNetworks from './components/SocialNetworks/SocialNetworks'

import routes from './routes'
import messages from './lang/index'

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />
      return <RouteWithProps path={prop.path} component={prop.component} key={key} />
    })}
  </Switch>
)

class App extends Component {
  state = {
    language: 'en'
  }

  changeLanguage = (lan) => {
    localStorage.setItem('language', lan)
    document.querySelector('html').setAttribute('lang', lan)
    this.setState({ language: lan })
  }

  componentWillMount() {
    const lan = localStorage.language ? localStorage.language : 'en'

    // set default language
    document.querySelector('html').setAttribute('lang', lan)

    this.setState({ language: lan })
  }

  render() {
    const nav = window.innerWidth >= 600 ? <Nav /> : <MobileNav langChange={this.changeLanguage} />
    const lang = <div className="LanguageSwitcherCon" ><LanguageSwitcher onChange={this.changeLanguage} /></div>

    return (
      <IntlProvider locale={this.state.language} messages={messages[this.state.language]} >
        <div className="App fadeIn">
          <div className="NavContainer" >
            {nav}
          </div>
          <div className="Content" >{switchRoutes}</div>
          {window.innerWidth > 720 ? lang: null}
          {window.innerWidth > 720 ? <div className="SnCon" ><SocialNetworks /></div> : null}
          <Modal
            show={this.props.showModal}
            messageText={this.props.modalMessage.text}
            mType={this.props.modalMessage.type} />
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => ({
  showModal: state.show_message,
  modalMessage: state.message
})

export default withRouter(connect(mapStateToProps)(App))

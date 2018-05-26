import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history"
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import tr from 'react-intl/locale-data/tr'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import messagesReducer from './store/reducers/messages'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(messagesReducer, composeEnhancers(
  applyMiddleware(thunk)
))

const history = createBrowserHistory()

addLocaleData(en)
addLocaleData(tr)

ReactDOM.render((
  <Provider store={store} >
    <Router history={history} basename={'/'} >
      <App />
    </Router>
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
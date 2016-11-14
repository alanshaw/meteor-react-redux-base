import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { Meteor } from 'meteor/meteor'
import reducers from '../../ui/redux/reducers'
import Routes from '../../ui/routes'
import Head from '../../ui/components/head'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(browserHistory, store)

Meteor.startup(() => {
  render((
    <div>
      <Head />
      <Provider store={store}>
        <Routes store={store} history={history} />
      </Provider>
    </div>
  ), document.getElementById('react-root'))
})

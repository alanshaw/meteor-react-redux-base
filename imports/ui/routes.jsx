import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import {
  Layout,
  Dashboard,
  NotificationsPage,
  CampaignsPage,
  CampaignActivityPage,
  CampaignContactsPage,
  ContactsPage,
  ContactsImportPage,
  ContactPage
} from './pages'

const Routes = ({ store, history }) => {
  return (
    <Router history={history}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Dashboard} />
        <Route path='notifications' component={NotificationsPage} />
        <Route path='campaigns' component={CampaignsPage} />
        <Route path='campaign'>
          <Route path=':slug'>
            <IndexRoute component={CampaignActivityPage} />
            <Route path='contacts' component={CampaignContactsPage} />
          </Route>
        </Route>
        <Route path='contacts'>
          <IndexRoute component={ContactsPage} />
          <Route path='import' component={ContactsImportPage} />
        </Route>
        <Route path='contact/:slug' component={ContactPage} />
      </Route>
    </Router>
  )
}

export default Routes

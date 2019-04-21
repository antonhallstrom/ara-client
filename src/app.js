import React from 'react'
import { withRouter } from 'react-router-dom'
import { withTheme } from 'emotion-theming'
import { Route, Switch } from 'react-router-dom'
import * as views from './views'
import { PrivateRoute } from './private-route'

function App() {
  return (
    <div>
      <views.TopBar />
      <Switch>
        <Route exact path="/" component={views.Biography} />
        <Route path="/blog" exact component={views.Blog} />
        <Route path="/blog/post/:id" component={views.Post} />
        <Route path="/login" component={views.Login} />
        <PrivateRoute path="/editor" component={views.PostEditor} />
        <Route component={views.NotFound} />
      </Switch>
    </div>
  )
}

export default withRouter(withTheme(App))

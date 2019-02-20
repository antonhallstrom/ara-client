import React from 'react'
import { withRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import * as views from './views'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <views.TopBar />
        <Switch>
          <Route exact path="/" component={views.Home} />
          <Route path="/admin" component={views.Login} />
          <Route path="/blog" component={views.Blog} />
          <Route path="/biography" component={views.Biography} />
          <Route component={views.NotFound} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(App)

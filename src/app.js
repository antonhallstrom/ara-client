import React from 'react'
import { withRouter } from 'react-router-dom'
import { withTheme } from 'emotion-theming'
import { Route, Switch } from 'react-router-dom'
import * as views from './views'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <views.TopBar />
        <Switch>
          <Route exact path="/" component={views.Home} />
          <Route path="/admin" component={views.Login} />
          <Route path="/blog" exact component={views.Blog} />
          <Route path="/blog/post/:id" component={views.Post} />
          <Route path="/biography" component={views.Biography} />
          <Route component={views.NotFound} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(withTheme(App))

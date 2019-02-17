import React from 'react'
import { withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as views from './views'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <views.TopBar />
        <Route exact path="/" component={views.Home} />
        <Route path="/admin" component={views.Login} />
        <Route path="/blog" component={views.Blog} />
      </React.Fragment>
    )
  }
}

export default withRouter(App)

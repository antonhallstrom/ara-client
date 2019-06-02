import PropTypes from 'prop-types'
import * as R from 'ramda'
import React, { useState, useLayoutEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { withTheme } from 'emotion-theming'
import { Route, Switch } from 'react-router-dom'
import * as views from './views'
import { PrivateRoute } from './private-route'

function App() {
  const [loadTime, setLoadTime] = useState(0)

  useLayoutEffect(() => {
    window.addEventListener(
      'load',
      () =>
        setTimeout(() => {
          const p = R.path(['performance', 'timing'], window)
          if (p) {
            const d = (p.loadEventEnd - p.navigationStart) / 1000
            setLoadTime(Math.round(d * 100) / 100)
          }
        }),
      0
    )
  }, [])

  return (
    <div>
      <views.TopBar />
      <Switch>
        <Route exact path="/" component={views.Biography} />
        <Route path="/book-summaries" component={views.BookSummaries} />
        <Route path="/blog" exact component={views.Blog} />
        <Route path="/blog/post/:id" component={views.Post} />
        <Route path="/login" component={views.Login} />
        <Route path="/artwork" component={views.Artwork} />
        <PrivateRoute path="/editor" component={views.PostEditor} />
        <Route component={views.NotFound} />
      </Switch>
      <views.Footer loadTime={loadTime} />
    </div>
  )
}

App.propTypes = {
  location: PropTypes.object,
}

export default withRouter(withTheme(App))

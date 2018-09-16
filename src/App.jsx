import React, { Component } from 'react'

// Routers
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import routers from './router'

// Global Components
import GlobalDrawer from './component/GlobalDrawer'

//import { observer, inject } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

const NotFound = () => {
  return <h2>找不到页面</h2>
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <GlobalDrawer>
            <Switch>
              {routers.map((route, i) => {
                return (
                  <Route
                    exact
                    path={route.path}
                    key={i}
                    component={route.component}
                  />
                )
              })}
              <Route component={NotFound} />
              <DevTools />
            </Switch>
          </GlobalDrawer>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App

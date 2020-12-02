import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainPage, ArticlePage } from '../pages'

import './style.css'

const App = () => {
    return (
        <div className="App">
          <Switch>
            <Route 
              path="/article/:id"
              render={({ match }) => {
                const { id } = match.params
                return < ArticlePage itemId={id} />
              }} />
            <Route 
              path="/" 
              component={ MainPage } exact />
            <Route 
              render = {() => <h2>Page not Found</h2> }/>
          </Switch>
        </div>
    )
}

export default App;

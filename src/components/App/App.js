import React, { Component } from 'react'

import ArticleList from '../ArticleList'
import ArticlePage from '../ArticlePage'
import PlaceHolderService from '../PlaceholderService'
import Spinner from '../Spinner'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './style.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/article/:id"
              render={({ match, location, history }) => {
                const { id } = match.params
                return < ArticlePage itemId={id} />
              }} />
            <Route path="/" component={ArticleList} exact={true} />
            <Route render = {() => <h2>Page not Found</h2> }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

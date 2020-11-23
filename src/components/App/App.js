import React, { Component } from 'react'

import ArticleList from '../ArticleList'
import PlaceHolderService from '../PlaceholderService'
import Spinner from '../Spinner'

import './style.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleList />
      </div>
    );
  }
}

export default App;

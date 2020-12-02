import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom'
import ErrorBoundry from './components/ErrorBoundry'
import PlaceHolderService from './services/PlaceHolderService'
import { PlaceHolderServiceProvider } from './components/PlaceHolderServiceContext'

import store from './store'

const placeHolderService = new PlaceHolderService();

ReactDOM.render(
  <Provider store={ store }>
    <ErrorBoundry>
      <PlaceHolderServiceProvider value={placeHolderService}>
        <Router>
          <App/>
        </Router>
      </PlaceHolderServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

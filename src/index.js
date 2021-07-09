import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import FindFruit from './components/FindFruit'
import Books from './components/Books'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers/reducers'

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/findfruit" component={FindFruit} />
          <Route path="/books" component={Books} />
        </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

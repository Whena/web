
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import {routers} from './router';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            routers.map((r, Index)=>{
               return(
              <Route key={Index} exact path={r.path}  component={r.Component} />
               )
            })
          }
        </Switch>
      </Router>
    );
  }
}

export default App;

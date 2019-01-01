import React from 'react';
import {Router, Route,Switch} from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux'
import asyncComponent from './untils/asynccomponent';
import RouterComponent from './component/routerComponent';
import {history} from './state';
const RouterOut = asyncComponent(() => import("./component/routerOut"));
const Component1 = asyncComponent(() => import("./component/component1"));
const Component2 = asyncComponent(() => import("./component/component2"));

const routes =[
  RouterComponent
];


const App =() => (
      // <ConnectedRouter
      //   history={history}
      // >
      <Router history={history}>
          <div>
            <span>我是导航</span>
            <Switch>
              <Route path="/" exact component={RouterOut}/>
              <Route key='component1' path="/component1" component={Component1}/>
              {
                routes
              }
            </Switch>
          </div>
      </Router>
    // </ConnectedRouter>
)

export default App;

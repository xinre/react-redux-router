import React, { Component } from 'react';
import { Route,Switch} from "react-router-dom";
import Component2 from './component2';
import NestComponent1 from './nestComponent1';
import NestComponent2 from './nestComponent2';

export default (
    <Switch key='component2'>
        <Route path='/component2' exact component={Component2}/>
        <Route path='/component2/NestComponent1' component={NestComponent1}/>
        <Route path='/component2/:id' component={NestComponent2}/>
    </Switch>
)
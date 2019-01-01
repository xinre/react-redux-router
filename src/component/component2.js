import React,{Component} from 'react';
import {Link} from "react-router-dom";
import { Route,Switch} from "react-router-dom";
import asyncComponent from '../untils/asynccomponent';
import { connect } from "react-redux";
const NestComponent1 = asyncComponent(() => import('./nestComponent1'));
const NestComponent2 = asyncComponent(() => import('./nestComponent2'));

@connect()
export default class Component2 extends Component{
    state={
        id:6,
    }
    render(){
        console.log('dispatch 我是',this.props.dispatch);
        return (
           <div>
               <p>component2</p>
               <Link to={{pathname:'/component2/NestComponent1?a=8',query: '我是通过query传值 '}}><p>nestcomponent1</p></Link>
               <Link to={{pathname:`/component2/${this.state.id}`,state: { number: 88 }}}><p>nestcomponent2</p></Link>
           </div>
        )
    }
}
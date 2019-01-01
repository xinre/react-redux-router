import React,{Component} from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import Fetch from "../untils/fetchFun";
import {sendSagaData} from '../action/sagaAction';
import {push} from "react-router-redux";

@connect(
    ({
        data:{
            datas:{
                data
            },
            router,
        }
    }) => ({
       data,router
    }),
    {sendSagaData,push}
)
export default class Component1 extends Component{
    componentDidMount(){
        // const e =await Fetch.fetch({apiName:"https://gank.io/api/data/Android",
        // sumparams:{mothod:'get'}});
        // console.log(e);
        const {sendSagaData} = this.props;
        sendSagaData()
    }
    render(){
        console.log(6666888,this.props.data)
        console.log(this.props.router)
        return (
           <div>
               <p>{this.props.data}</p>
               <p>component1</p>
               <Link to='/component2/NestComponent1'><p>nestcomponent1</p></Link>
               {/* <Link to='/component2'><p>nestcomponent1</p></Link> */}
               <p onClick={() => {
                   this.props.push('/component2');
                   }}>nestcomponent1</p>
           </div>
        )
    }
}
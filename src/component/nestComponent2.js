import React,{Component} from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";

@connect(
    ({
        data:{
            router,
        }
    }) => ({
       router
    })
)

export default class NestComponent2 extends Component{
    render(){
        console.log(88,this.props.router)
        console.log(this.props.location)
        console.log(this.props.match)
        return (
            <div>
                 <Link to={'/component2/8'}><p>我是嵌套子路由2</p></Link>
                <p>{this.props.match.params.id}</p>
                <p>{this.props.match.url}</p>
                <p>{this.props.match.path}</p>
                {/* <p>{this.props.location.state.number}</p> */}
                <p>{this.props.location.query}</p>
            </div>
        )
    }
}
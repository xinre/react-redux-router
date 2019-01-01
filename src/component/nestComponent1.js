import React,{Component} from 'react';

export default class NestComponent1 extends Component{
    render(){
        console.log(this.props.location.search.slice(1));
        return (
            <div>
                <p>我是嵌套子路由1</p>
                <span>{this.props.location.search[3]}</span>
            </div>
        )
    }
}
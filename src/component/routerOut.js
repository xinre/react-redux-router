import React,{Component} from 'react';
import { Link,} from "react-router-dom";

export default class RouterOut extends Component{
    render(){
        return (
            <div>
                <Link to="/component1"><p>123456</p></Link>
                <Link to="/component2"><p>123456</p></Link>
            </div>
        )
    }
}
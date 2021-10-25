import React, { Component } from 'react'
import {Datas} from './Data'
import './child.css'

export default class Child extends Component {

    // constructor (props){
    //     super(props);
    // }

    render() {
        return (
            <div>
                {Datas.map((data,index)=>(
                    <div key={index}>
                        <h1>{data.name}</h1>
                        <h2>{data.age}</h2>
                        </div>


                ))}

            </div>
            // <div className="wrapper">
            // <div className="card">
            //     <h1>{this.props.name}</h1>

            //     <p>{this.props.age}</p>                
                
            // </div>
            // </div>
        )
    }
}

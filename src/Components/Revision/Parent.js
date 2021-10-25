//props

import React, { Component } from 'react'
import Child from './Child'

export const Datas=[{
    id:1,
    name:"collins",
    age:45

},
{
    id:2,
    name:"salma",
    age:78

},
{
    id:3,
    name:"David",
    age:50

},
]
export default class Parent extends Component {
    constructor (props){
        super(props);
    }
    render() {
        return (
            <div>
                {Datas.map((item)=>(
                    <div key={item.id}>
                    <Child name={item.name} age={item.age}/>

                        </div>

                ))}
                
            </div>
        )
    }
}

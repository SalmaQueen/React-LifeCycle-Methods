// import React,{useState} from 'react'

// const Main=()=>{

// const [newName, setNewName]=useState("salma")
//     return(
//        <div>
//            <h2>My name is {newName}</h2>

//        </div>
//     )
// }

// export default Main;

import React, { Component } from 'react'

 class Main extends Component {
    constructor (props){
        super(props);

        this.state={
            name:"Maxwel",
            age:23
        }
    }


    render() {
        return (
            <div>
       <h2>My name is {this.state.name}</h2>

                
            </div>
        )
    }
}

export default Main;
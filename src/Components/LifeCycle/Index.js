// initial phase
//MOunting phase


import React, { Component } from 'react'

export default class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            todo:{},
            age:34
        }
    }

    // componentWillMount() {

    //     this.setState({ name: "Monalisa" });
    
    // }

    //making an api call with componnetWillMount
    componentWillMount() {

        fetch("https://jsonplaceholder.typicode.com/todos/1")
    
          .then(response => response.json())
    
          .then(json => {
    
            this.setState({ todo: json });
    
          });
    
    }


    render() {
        const { todo } = this.state;

        console.log(todo)
    
        return (
    
          <div>
    
            <p>API call :</p>
    
            Todo title : <p>{todo.title}</p>
    
            Todo completed : <p>{todo.completed === true ? "true" : "false"}</p>
    
          </div>
        )
    }
}



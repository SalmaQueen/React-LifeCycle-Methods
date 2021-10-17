import React, { Component } from 'react'

export default class DidMount extends Component {
    constructor(props){
        super(props);

        this.state={
            // date: new Date()
            // name:"salma"
            books:[]
        }
    }


    // componentDidMount(){
    //     this.hell=setInterval(
    //         ()=>this.tick(), 3000
    //     )
    // }

    componentDidMount() {

        fetch('http://hp-api.herokuapp.com/api/characters')
    
        .then((response) => response.json())
    
        .then(data=> {
    
            this.setState({ books: data});
    
        });
    
    }

  


    render() {
        return (
            <div>
                {this.state.books.map((book)=>(
                    <div key={book.id}>
                        <h1>{book.name}</h1>
                        <h1>{book.species}</h1>
                    </div>
                ))}
              
                
            </div>
        )
    }
}

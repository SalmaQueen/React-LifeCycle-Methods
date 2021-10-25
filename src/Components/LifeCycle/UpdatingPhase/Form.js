// import React from 'react';
// import Person from './Person';

// export default class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state= { name: '' } ;
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ name: event.currentTarget.value });
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" onChange={ this.handleChange } />
//         <Person name={ this.state.name } />
//       </div>
//     );
//   }
// }

// A word of caution with componentWillReceiveProps(). Just because this method was called, 
// does not mean the value of props has changed.



// shouldComponentUpdate(nextProps, nextState)


// It is invoked when a component decides any changes/updation to the DOM. 
// It allows you to control the component's behavior of updating itself.
//  If this method returns true, the component will update. Otherwise,
//  the component will skip the updating.


// Use shouldComponentUpdate() to let React know if a component’s output is 
// not affected by the current change in state or props. The default behavior is to
//  re-render on every state change, and in 
// the vast majority of cases you should rely on the default behavior.
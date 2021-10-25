// componentWillRecieveProps()
// It is invoked when a component receives new props. If you want to update the state 
// in response to prop changes, you should compare this.props and nextProps to
//  perform state transition
//  by using this.setState() method.


// shouldComponentUpdate()
// It is invoked when a component decides any changes/updation to the DOM.
//  It allows you to control the component's behavior of updating itself. 
//  If this method returns true, the component will update. Otherwise,
//  the component will skip the updating.


// componentWillUpdate()
// It is invoked just before the component updating occurs. Here, 
// you can't change the component state by invoking this.setState() method.
//  It will not be called, if shouldComponentUpdate() returns false.

class EmailInput extends Component {
    state = { email: this.props.defaultEmail };
  
    handleChange = event => {
      this.setState({ email: event.target.value });
    };
  
    render() {
      return <input onChange={this.handleChange} value={this.state.email} />;
    }
  }
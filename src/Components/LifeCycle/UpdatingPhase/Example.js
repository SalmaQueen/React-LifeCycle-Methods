import React
 from "react";
class Example extends React.Component {
    constructor() {
    super();
    //Initialization of the initial state for the components
    this.state = {
    flag: true,
    numberOfClick: 0
    };
    //Binding the function to call with this
    this.clickCountermanagement = this.clickCountermanagement.bind(this);
    }
    //Here this is the function which will be used for calculating counters and flag values
    clickCountermanagement() {
    let flagVal =Math.random() > 0.5
    let clickVal =this.state.numberOfClick + 1
    this.setState({
    flag:flagVal ,
    numberOfClick: clickVal
    });
    }
    //Inside this function we will check if we should render components or not. If it returns true then component will render else component will not render .
    shouldComponentUpdate(nextProps, nextState) {
    return this.state.flag != nextState.flag;
    }
    render() {
    let stringFlag =this.state.flag.toString()
    return (
    <div className="main-div">
    An example for souldComponentUpdate() function
    <p>The flag value is :<b>{stringFlag}</b></p>
    <p>Number total clicks: <b>{this.state.numberOfClick}</b></p>
    <button className="button-class" onClick={this.clickCountermanagement}>
    On clicking this button counter and true false will change
    </button>
    </div>
    );
    }
    }
    export default Example;
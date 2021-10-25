import logo from './logo.svg';
import './App.css';
import Index from './Components/LifeCycle/Index';
import DidMount from './Components/LifeCycle/DidMount';
import Example from './Components/LifeCycle/UpdatingPhase/Example';
// import Main from './Components/Main'
import Main from './Components/Revision/Main'
import Parent from './Components/Revision/Parent';
import Child from './Components/Revision/Child';
import Courasel from './Components/Revision/Courasels/Courasel';

function App() {
  return (
    <div className="App">
   {/* <Main/> */}
   {/* <Index/> */}
   {/* <DidMount/> */}
   {/* <Example/> */}
   {/* <Main/> */}
   {/* <Parent/> */}
   {/* <Child/> */}
   <Courasel/>
    </div>
  );
}

export default App;

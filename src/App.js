import './App.css';
import FComponent from './components/component/FunctionalComponent';
import CComponent from './components/component/ClassComponent';
import ComponentJSX from './components/component/Component';
import UserClass from './components/props/UserClass';
import UserFunctional from './components/props/UserFunctional';
import Home from './components/state/Home';
import Dashboard from './components/useState/Dashboard';
import List from './components/rendering/List';
import Conditional1 from './components/rendering/Conditional1';
import Conditional2 from './components/rendering/Conditional2';
import Conditional3 from './components/rendering/Conditional3';
import Conditional4 from './components/rendering/Conditional4';
import Conditional5 from './components/rendering/Conditional5';
import EventFunctional from './components/eventHandler/EventFunctional';
import EventClass1 from './components/eventHandler/EventClass1';
import EventClass2 from './components/eventHandler/EventClass2';
import RefComponent1 from './components/refComponent/RefComponent1';
import RefComponent2 from './components/refComponent/RefComponent2';
import RefComponent3 from './components/refComponent/RefComponent3';
import Lifecycle from './components/lifecycleComponent/Index';

function App() {
  // const name = "Ngoding Channel"
  // const email = "ngoding@gmail.com"
  // const pengikut = 10000
  return (
    <div className="App">
      <header className="App-header">
        <Lifecycle />
        {/* <RefComponent3 /> */}
        {/* <RefComponent2 /> */}
        {/* <RefComponent1 /> */}
        {/* <EventClass2 /> */}
        {/* <EventClass1 /> */}
        {/* <EventFunctional /> */}
        {/* <Conditional5 /> */}
        {/* <Conditional4 /> */}
        {/* <Conditional3 /> */}
        {/* <Conditional2 /> */}
        {/* <Conditional1 /> */}
        {/* <List /> */}
        {/* <Dashboard /> */}
        {/* <Home /> */}
        {/* <UserFunctional channel="Coding Channel" email="coding@gmail.com"/> */}
        {/* <UserClass name="ReactJS Channel" email="reactjs@gmail.com" subscriber={5000}/>
        <UserClass name={name} email={email} subscriber={pengikut}/> */}
        {/* <ComponentJSX /> */}
        {/* <CComponent /> */}
        {/* <FComponent /> */}
      </header>
    </div>
  );
}

export default App;

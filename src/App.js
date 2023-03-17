import './App.css';
import FComponent from './components/component/FunctionalComponent';
import CComponent from './components/component/ClassComponent';
import ComponentJSX from './components/component/Component';
import UserClass from './components/props/UserClass';
import UserFunctional from './components/props/UserFunctional';
import Home from './components/state/Home';
import Dashboard from './components/useState/Dashboard';

function App() {
  // const name = "Ngoding Channel"
  // const email = "ngoding@gmail.com"
  // const pengikut = 10000
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
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

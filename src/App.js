import './App.css';
import FComponent from './components/component/FunctionalComponent';
import CComponent from './components/component/ClassComponent';
import ComponentJSX from './components/component/Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <FComponent /> */}
        {/* <CComponent /> */}
        <ComponentJSX />
      </header>
    </div>
  );
}

export default App;

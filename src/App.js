import './App.css';
import FComponent from './components/component/FunctionalComponent';
import CComponent from './components/component/ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <FComponent /> */}
        <CComponent />
      </header>
    </div>
  );
}

export default App;

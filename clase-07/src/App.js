import './App.css';
import ClassComponent from './Components/Class/index.jsx';
import FunctionalComponent from './Components/Function/index.jsx';
import Composition from './Components/Composition';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>


      <ClassComponent></ClassComponent>
      <FunctionalComponent></FunctionalComponent>
      <Composition></Composition>
    </div>
  );
}

export default App;

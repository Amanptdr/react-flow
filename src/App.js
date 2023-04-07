import logo from './logo.svg';
import './App.css';
import Flow from './components/FlowStart';
import TreeData from './TreeData/Tree';
import ShapeFlow from './components/shapes/index';
import CreateNew from './components/CreateNew';
import ExpandAndCollapse from './CollapseAndExpand';
function App() {
  return (
    <div className="App"  style={{ height: 800 }}>
      <CreateNew />
    </div>
  );
}

export default App;

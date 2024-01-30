import logo from './logo.svg';
import './App.css';
import ToDOHeader from './component/ToDoHeader/ToDOHeader';
import { ToDoApp } from './component/ToDoOprtations/ToDoOprations';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDOHeader title={"ToDo - app"} />
        <ToDoApp />
      </header>
    </div>
  );
}

export default App;

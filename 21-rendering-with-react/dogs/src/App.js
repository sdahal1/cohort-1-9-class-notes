import logo from './logo.svg';
import './App.css';
import VisitorCounter, {otherVariable} from './VisitorCounter';

function App() {
  let userName = 'Michelle';
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dogs</h1>
        <p>
          This app displays dog information. We love dogs.
        </p>
        <p>
          
        </p>
        <VisitorCounter userName={userName} />
      </header>
    </div>
  );
}

export default App;

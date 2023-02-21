import logo from './logo.svg';
import './App.css';
import CatsList from './CatsList';
import DogsList from './DogsList';
import Header from './Header';
import VisitorCounter from './VisitorCounter';

function App() {
  let userName = 'Michelle';
  let numberOfVisitors = 2;
  return (
    <div className="App">
      <Header />
      <p>
        This app displays dog information. We love dogs.
      </p>
      <CatsList />
      <DogsList />
      <VisitorCounter userName={userName} num={numberOfVisitors} />
    </div>
  );
}

export default App;

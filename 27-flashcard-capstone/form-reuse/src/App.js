import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import AddDog from './AddDog';
import EditDog from './EditDog';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Dog App (but not good this time)</h1>
        <Link to="/">Home</Link>
        <Link to="/dogs/add">Add a Dog</Link>
        <Link to="/dogs/1/edit">Edit Dog</Link>

        <Route path="/dogs/add">
          <AddDog />
        </Route>
        <Route path="/dogs/:dogId/edit">
          <EditDog />
        </Route>
      </div>
    </Router>
  );
}

export default App;

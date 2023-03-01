import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ numVisitors }) {

  const [showDogs, setShowDogs] = useState(true);

  const logHi = () => {
    console.log('Hi!');
  }
  return <header>
    <h1 onClick={() => setShowDogs(show => !show)} id="header" className="dogs-header">
      {showDogs ? "Dogs" : "Cats"}
    </h1>
    <p>You are visitor {numVisitors}.</p>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/dogs">Dogs</Link>
      <Link to="/cats">Cats</Link>
    </nav>
    <hr />
  </header>
}

export default Header;

import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import CatsList from './cats/CatsList';
import Details from './details/Details';
import DogsList from './dogs/DogsList';
import Header from './common/Header';
import VisitorCounter from './common/VisitorCounter';

function App() {
  let userName = 'Michelle';

  // create state variable called numVisitors
  // its initial value is 1
  const [numVisitors, setNumVisitors] = useState(1);

  // when this function is called, it sets the 
  // number of visitors to be the current number plus 1.
  function incrementNumVisitors() {
    console.log(numVisitors);
    setNumVisitors(numVisitors => numVisitors + 1)
    // numVisitors here will continue to be the old value, because line 19 runs asynchronously
    console.log(numVisitors);
  }

  return (
    <Router>
      <div className="App">
        <Header numVisitors={numVisitors} />
        <Route path="/">
          <p>
            This app displays dog information. We love dogs.
          </p>
        </Route>
        <Route path="/cats" exact={true}>
          <CatsList />
        </Route>
        <Route path="/dogs" exact={true}>
          <DogsList />
        </Route>
        <Route path="/details/:extraDetails">
          <Details />
        </Route>
        <VisitorCounter userName={userName} numVisitors={numVisitors} incrementNumVisitors={incrementNumVisitors} />
      </div>
    </Router>
  );
}

export default App;

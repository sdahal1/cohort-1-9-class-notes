import React, { useState } from 'react';
import './App.css';
import CatsList from './CatsList';
import DogsList from './DogsList';
import Header from './Header';
import VisitorCounter from './VisitorCounter';

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
    <div className="App">
      <Header numVisitors={numVisitors} />
      <p>
        This app displays dog information. We love dogs.
      </p>
      <CatsList />
      {/* <DogsList /> */}
      <VisitorCounter userName={userName} numVisitors={numVisitors} incrementNumVisitors={incrementNumVisitors} />
    </div>
  );
}

export default App;

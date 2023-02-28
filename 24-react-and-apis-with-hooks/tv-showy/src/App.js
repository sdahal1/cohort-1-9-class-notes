import { useState } from 'react';
import Search from './Search';
import './App.css';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <h1>Welcome to TV Showy!</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchTerm && <p>
        You searched for {searchTerm}.
      </p>}
    </div>
  )
}

export default App;

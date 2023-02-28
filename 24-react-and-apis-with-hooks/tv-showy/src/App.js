import { useEffect, useState } from 'react';
import Search from './Search';
import SearchResults from './SearchResults';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchTvShow() {
      try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`,
          { signal: abortController.signal });
        const data = await response.json();
        console.log(data);
        setSearchResults(data);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('aborted')
        } else {
          throw error;
        }
      }
    }
    if (searchTerm.trim().length > 0) {
      console.log('fetching');
      fetchTvShow();
    }
    return () => {
      abortController.abort();
    }
  }, [searchTerm]);

  useEffect(() => {
    document.title = `Search: ${searchTerm}`;
    return () => {
      document.title = 'TV Showy';
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>Welcome to TV Showy!
        <button onClick={e => setCount(count + 1)}>Increase Count ({count})</button>
      </h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchTerm && <p>
        You searched for {searchTerm}.
      </p>}
      <SearchResults searchResults={searchResults} />

    </div>
  )
}

export default App;

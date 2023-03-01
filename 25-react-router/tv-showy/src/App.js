import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, useHistory, useLocation } from 'react-router-dom';
import Search from './Search';
import SearchResults from './SearchResults';
import './App.css';
import Movie from './shows/Show';

function App() {
  const [count, setCount] = useState(0);
  const [q, setQ] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  useEffect(() => {
    setQ(new URLSearchParams(location.search).get('q') || '');
  }, [location.search])
  useEffect(() => {
    const abortController = new AbortController();
    async function fetchTvShow() {
      try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${q}`,
          { signal: abortController.signal });
        const data = await response.json();
        console.log(data);
        setSearchResults(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.log('aborted')
        } else {
          throw error;
        }
      }
    }
    if (q.trim().length > 0) {
      console.log('fetching');
      fetchTvShow();
    }
    return () => {
      abortController.abort();
    }
  }, [q]);

  useEffect(() => {
    document.title = `Search: ${q}`;
    return () => {
      document.title = 'TV Showy';
    }
  }, [q]);

  return (
    <Router>
      <div>
        <Route path="/" exact={true}>
          <h1>Welcome to TV Showy!
            <button onClick={e => setCount(count + 1)}>Increase Count ({count})</button>
          </h1>
          <Search searchTerm={q} setSearchTerm={setQ} />
          {q && <p>
            You searched for {q}.
          </p>}
          <SearchResults searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id">
          <Movie />
        </Route>
      </div>
    </Router>
  )
}

export default App;

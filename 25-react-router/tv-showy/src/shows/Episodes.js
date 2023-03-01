import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Episodes({ show }) {
  const [episodes, setEpisodes] = useState([])
  const { id } = useParams();
  useEffect(() => {
    const abortController = new AbortController();
    async function fetchEpisodes() {
      try {
        const response = await fetch(
          `https://api.tvmaze.com/shows/${id}/episodes`,
          { signal: abortController.signal });
        const data = await response.json();
        setEpisodes(data);
      } catch (error) {
        if (error.name === 'AbortError') {
          // abort errors are fine and expected, just log
          console.log('aborting')
        } else {
          // not the expected error, re-throw it
          throw error;
        }
      }
    }
    fetchEpisodes();
    return () => {
      abortController.abort();
    }
  })
  return <div>
    <h3>Episodes</h3>
    {episodes && episodes.length > 0 && episodes.map(x => <div>Episode {x.season}.{x.number}: {x.name}</div>)}
  </div>
}

export default Episodes;

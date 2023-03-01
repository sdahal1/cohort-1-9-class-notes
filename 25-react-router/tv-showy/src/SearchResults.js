import { Link } from "react-router-dom";

function SearchResults({ searchResults }) {
  return searchResults && searchResults.length > 0 && <div>
    <h3>Search Results</h3>
    {searchResults.map(result => <div key={result.show.id}>
      <h4>{result.show.name}</h4>
      {result.show.image && <img src={result.show.image.medium} />}
      <Link to={`/shows/${result.show.id}`}>See More</Link>
    </div>)}
  </div>
}

export default SearchResults;
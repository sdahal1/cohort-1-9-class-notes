function SearchResults({ searchResults }) {
  return searchResults && searchResults.length > 0 && <div>
    <h3>Search Results</h3>
    {searchResults.map(result => <div>
      <h4>{result.show.name}</h4>
      {result.show.image && <img src={result.show.image.medium} />}
    </div>)}
  </div>
}

export default SearchResults;
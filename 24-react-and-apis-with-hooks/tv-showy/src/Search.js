import { useState } from "react";

function Search({ searchTerm, setSearchTerm }) {
  const [currentSearchTerm, setCurrentSearchTerm] = useState(searchTerm);

  function handleChange(e) {
    setCurrentSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchTerm(currentSearchTerm);
    setCurrentSearchTerm('');
  }
  return <form onSubmit={handleSubmit}>
    <label htmlFor="showSearch">Search for a show!</label>
    <input name="showSearch" id="showSearch" type="text" value={currentSearchTerm} onChange={handleChange} />
    <input type="submit" value="Search" />
  </form>
}

export default Search;

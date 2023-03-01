import { useState } from "react";
import { useHistory } from "react-router-dom";

function Search({ searchTerm, setSearchTerm }) {
  const [currentSearchTerm, setCurrentSearchTerm] = useState(searchTerm);
  const history = useHistory();

  function handleChange(e) {
    setCurrentSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchTerm(currentSearchTerm);
    history.push(`/?q=${currentSearchTerm}`)
  }
  return <form onSubmit={handleSubmit}>
    <label htmlFor="showSearch">Search for a show!</label>
    <input name="showSearch" id="showSearch" type="text" value={currentSearchTerm} onChange={handleChange} />
    <input type="submit" value="Search" />
  </form>
}

export default Search;

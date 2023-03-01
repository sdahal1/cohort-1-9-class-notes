import { useEffect, useState } from 'react';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Episodes from './Episodes';

function Show() {
  const [showData, setShowData] = useState({});
  const { id } = useParams();
  const { path, url } = useRouteMatch();
  console.log(path, url);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(data => data.json())
      .then(data => setShowData(data));
  }, [id])
  return <div>
    <h2>Show {id}</h2>
    <nav>
      <Link to={url}>See Show Details</Link>
      <Link to={`${url}/episodes`}>See Episodes</Link>
    </nav>
    {showData.id ? <div>
      <h3>{showData.name}</h3>
      {showData.image && <img src={showData.image.medium} alt={showData.name} />}
      <Route path={path} exact>
        <p>A {showData.type} show in {showData.language} with a runtime of {showData.runtime || showData.averageRuntime || 'unknown'} minutes</p>
        <span>{showData.summary}</span>
        <span dangerouslySetInnerHTML={{ __html: showData.summary }}></span>
      </Route>
      <Route path={`${path}/episodes`} exact>
        <Episodes />
      </Route>
      {/* {JSON.stringify(showData)} */}
    </div> : "Loading..."}
  </div>
}

export default Show;
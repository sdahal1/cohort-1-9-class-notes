import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function Show() {
  const [showData, setShowData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(data => data.json())
      .then(data => setShowData(data));
  }, [id])
  return <div>
    <h2>Show {id}</h2>
    {showData.id ? <div>
      <h3>{showData.name}</h3>
      {showData.image && <img src={showData.image.medium} alt={showData.name} />}
      <p>A {showData.type} show in {showData.language} with a runtime of {showData.runtime || showData.averageRuntime || 'unknown'} minutes</p>
      <span dangerouslySetInnerHTML={{ __html: showData.summary }}></span>
      {JSON.stringify(showData)}
    </div> : "Loading..."}
  </div>
}

export default Show;
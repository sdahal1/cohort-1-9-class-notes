import { useParams } from "react-router-dom";

function Details() {
  const { extraDetails } = useParams();
  return <div>Details: {extraDetails} </div>
}

export default Details;

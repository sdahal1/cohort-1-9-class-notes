import { useState } from "react";
import Cat from "./Cat";

function CatsList() {
  const [cats, setCats] = useState([
    {
      name: "sphynx",
      activities: ["perching", "riddling"]
    },
    {
      name: "tabby",
      activities: ["eat", "destroy"]
    },
    {
      name: "orange"
    }
  ]);

  function addHobbyToCat(hobby, catToUpdate) {
    const newCats = cats.map(cat =>
      cat === catToUpdate ?
        { ...cat, activities: [...cat.activities, hobby] } :
        cat
    )
    // loop through the cats
    // if it's the cat I'm looking for, update its activities to a new array that includes the new hobby
    // otherwise, keep the same cat
    setCats(newCats);
  }
  return <div>
    <h2>Cats List</h2>
    <ul>
      {cats.map(cat => (
        <li key={cat.name}>
          <Cat cat={cat} addHobbyToCat={addHobbyToCat} />
        </li>
      ))}
    </ul>
  </div>
}

export default CatsList;

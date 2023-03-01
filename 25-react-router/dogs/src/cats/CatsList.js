import { useState } from "react";
import Cat from "./Cat";
import CatRadioButtons from "./CatRadioButtons";

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
  // state to keep track of which radio button was picked
  // useState: state variable name, state variable setter name, initial value of the state variable
  const [hobby, setHobby] = useState('all');

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
  let catsToDisplay = cats;
  if (hobby !== 'all') {
    catsToDisplay = cats.filter(cat => cat.activities && cat.activities.includes(hobby));
  }
  return <div>
    <h2>Cats List</h2>
    <CatRadioButtons hobby={hobby} setHobby={setHobby} />
    <ul>
      {/* instead of mapping over all the cats, make sure we only do cats with the chosen activity */}
      {catsToDisplay.map(cat => (
        <li key={cat.name}>
          <Cat cat={cat} addHobbyToCat={addHobbyToCat} />
        </li>
      ))}
    </ul>
  </div>
}

export default CatsList;

import React, { useState } from 'react';

function Cat({ cat, addHobbyToCat }) {
  const { name, activities } = cat;
  const [newHobby, setNewHobby] = useState('');

  const otherCoolFunction = () => {
    return 2;
  }
  const updateNewHobby = (e, currentCatName) => {
    console.log('current cat is', currentCatName)
    console.log(newHobby)
    setNewHobby(e.target.value);
  }

  function handleChange(e, name) {
    updateNewHobby(e, name);
    otherCoolFunction();
  }
  return <React.Fragment>
    <h3 className="btn btn-warning">{name}</h3>
    {activities && (
      <>
        <ul>
          {activities.map(activity => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
        <label htmlFor={`${name}-hobby`}>Add hobby</label>
        <input id={`${name}-hobby`} type="text" name="hobby" onChange={e => handleChange(e, name)} value={newHobby} />
        <button className="btn btn-primary" onClick={() => addHobbyToCat(newHobby, cat)}>Add hobby</button>
      </>
    )}
  </React.Fragment>
}

export default Cat;

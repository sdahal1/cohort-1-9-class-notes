import React, { useState } from 'react';

function Cat({ cat, addHobbyToCat }) {
  const { name, activities } = cat;
  const [newHobby, setNewHobby] = useState('');

  const updateNewHobby = (e) => {
    setNewHobby(e.target.value);
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
        <input id={`${name}-hobby`} type="text" name="hobby" onChange={updateNewHobby} value={newHobby} />
        <button className="btn btn-primary" onClick={(e) => addHobbyToCat(newHobby, cat)}>Add hobby</button>
      </>
    )}
  </React.Fragment>
}

export default Cat;

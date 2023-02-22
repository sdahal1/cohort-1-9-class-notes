import React from 'react';

function Cat({ name, activities }) {
  return <React.Fragment>
    <h3 className="btn btn-warning">{name}</h3>
    {activities && (
      <ul>
        {activities.map(activity => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>
    )}
  </React.Fragment>
}

export default Cat;

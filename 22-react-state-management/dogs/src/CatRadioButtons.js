import React from 'react';

function CatRadioButtons({ hobby, setHobby }) {
  // onChange - keep track of which radio button is picked
  // tell the parent CatsList that a new radio button is picked
  const activities = ['all', 'perching', 'riddling', 'eat', 'destroy'];
  return <form>
    <h4>Pick a fun cat activity</h4>
    {activities.map(activity => <React.Fragment key={activity}>
      <label htmlFor={activity}>{activity}</label>
      <input type="radio" name="activity" value={activity} id={activity} onChange={e => setHobby(e.target.value)} checked={hobby === activity} />
    </React.Fragment>)}
  </form>
}

export default CatRadioButtons;

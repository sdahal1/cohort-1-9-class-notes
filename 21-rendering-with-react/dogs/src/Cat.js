
function Cat({ name, activities }) {
  return <div>
    <h3>{name}</h3>
    {activities && (
      <p>Hobbies include: {activities.join(', ')}</p>
    )}
  </div>
}

export default Cat;

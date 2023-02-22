import Cat from "./Cat";

function CatsList() {
  let cats = [
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
  ]
  return <div>
    <h2>Cats List</h2>
    <ul>
      {cats.map(cat => (
        <li key={cat.name}>
          <Cat name={cat.name} activities={cat.activities} />
        </li>
      ))}
    </ul>
  </div>
}

export default CatsList;

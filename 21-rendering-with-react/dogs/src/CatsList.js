import Cat from "./Cat";

function CatsList() {
  return <div>
    <h2>Cats List</h2>
    <Cat name="sphynx" activities={["perching", "riddling"]} />
    <Cat name="tabby" activities={["eat", "destroy"]} />
    <Cat name="orange" />
  </div>
}

export default CatsList;

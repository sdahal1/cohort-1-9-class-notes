import { useEffect, useState } from "react";
import DogForm from "./DogForm";

function readDog(id) {
  return Promise.resolve({
    name: 'Coco',
    color: 'black and white'
  })
}
function updateDog() { }

function EditDog() {
  const [dog, setDog] = useState({ name: '', color: '' });
  useEffect(() => {
    readDog().then(d => setDog(d))
  }, [])
  // console.log('in edit dog');
  console.log(dog);
  function handleSubmit(dogData) {
    updateDog({
      ...dog,
      ...dogData
    })
    console.log('updating dog');
  }
  return <div>
    <DogForm initialState={dog} handleSubmit={handleSubmit} submitButtonText="Save" />
  </div>
}

export default EditDog;

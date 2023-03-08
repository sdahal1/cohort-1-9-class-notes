import DogForm from "./DogForm";

const { useState } = require("react");

async function createDog(data) {
  console.log('Creating dog with data', data)
  return Promise.resolve(data);
}

function AddDog() {
  const initialState = {
    name: '',
    color: ''
  };

  const handleSubmit = async (dogData) => {
    await createDog(dogData);
  }

  return <div>
    <h2>Add Dog</h2>
    <DogForm initialState={initialState} handleSubmit={handleSubmit} submitButtonText="Add" />

  </div>
}

export default AddDog;

import { useState } from "react";

function AddDog({ addDog }) {
  const initialFormState = {
    name: '',
    imageUrl: ''
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  console.log(formData);

  const updateFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addDog(formData);
    setFormData({ ...initialFormState })
  }

  return <form onSubmit={handleSubmit}>
    {/* <a href="http://google.com" onClick={e => e.preventDefault()}>Go to Google</a> */}
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" onChange={updateFormData} value={formData.name} />
    <label htmlFor="imageUrl">Image URL</label>
    <input type="url" id="imageUrl" name="imageUrl" onChange={updateFormData} value={formData.imageUrl} />
    <input type="submit" value="Add" />
  </form>
}

export default AddDog;

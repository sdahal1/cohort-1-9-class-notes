import { useState } from 'react';

function AddFlower({ addFlower }) {
  const initialFormState = {
    name: '',
    quantity: 0,
    color: '',
    imageUrl: ''
  };
  const [formData, setFormData] = useState(initialFormState);
  const handleChange = (e) => {
    // const newFormData = {...formData};
    // newFormData[e.target.name] = e.target.value
    // setFormData(newFormData);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    // prevent default
    e.preventDefault();
    // add the new flower to the flowers array
    addFlower({ ...formData })
    // reset the form
    setFormData({ ...initialFormState })
  }

  return <div>
    Add a Flower
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} />
      <label htmlFor="quantity">Quantity</label>
      <input type="number" name="quantity" id="quantity" onChange={handleChange} value={formData.quantity} />
      <label htmlFor="color">Color</label>
      <input type="text" name="color" id="color" onChange={handleChange} value={formData.color} />
      <label htmlFor="imageUrl">Image URL</label>
      <input type="url" name="imageUrl" id="imageUrl" onChange={handleChange} value={formData.imageUrl} />
      <input type="submit" />
    </form>
  </div>
}

export default AddFlower;

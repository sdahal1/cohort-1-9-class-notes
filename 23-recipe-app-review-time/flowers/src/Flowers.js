import { useState } from 'react';
import './Flowers.css';

function Flowers() {
  const [flowers, setFlowers] = useState([
    {
      name: 'Tulip',
      quantity: 84,
      color: 'multicolored',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spring-flowers-1613759017.jpg?crop=0.669xw:1.00xh;0.0635xw,0&resize=640:*'
    },
    {
      name: 'Rose',
      quantity: 12,
      color: 'red',
      imageUrl: 'https://m.media-amazon.com/images/I/61uM+SGiTPL.jpg'
    }
  ]);
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
    setFlowers([
      ...flowers,
      { ...formData }
    ])
    // reset the form
    setFormData({ ...initialFormState })
  }

  return <main>
    {flowers.map(flower => (
      <div className="flower" key={flower.name}>
        <div>
          <img src={flower.imageUrl} />
        </div>
        <div>
          <h3>{flower.name}</h3>
          <p>Quantity: {flower.quantity}</p>
          <p>Color: {flower.color}</p>
        </div>
      </div>
    ))}
    {/* this form should really be its own component */}
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
  </main>
}

export default Flowers;

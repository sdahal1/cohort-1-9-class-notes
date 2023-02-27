import { useState } from 'react';
import AddFlower from './AddFlower';
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
  function addFlower(newFlower) {
    setFlowers([
      ...flowers,
      newFlower
    ])
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
    <AddFlower addFlower={addFlower} />
  </main>
}

export default Flowers;

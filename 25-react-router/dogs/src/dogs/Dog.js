import './Dog.css';

function Dog({ dog, incrementDogGoodness }) {
  const { name, imageUrl, goodness } = dog;
  // let goodestBoy = "";
  // if(name === 'husky') {
  //   goodestBoy = <p>the goodest boy</p>
  // }

  return (
    <div>
      <h3 className="dog-h3">{name}</h3>
      <img src={imageUrl} alt={name} />
      <button className="btn btn-primary" onClick={() => incrementDogGoodness(dog)}>Good dog</button>
      <span>Current goodness: {goodness}</span>
      {name === 'husky' && (<p>The goodest boy</p>)}
    </div>
  )
}

export default Dog;

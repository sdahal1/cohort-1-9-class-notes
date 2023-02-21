import './Dog.css';

function Dog({ name, imageUrl }) {
  // let goodestBoy = "";
  // if(name === 'husky') {
  //   goodestBoy = <p>the goodest boy</p>
  // }

  return (
    <div>
      <h3>{name}</h3>
      <img src={imageUrl} />
      {name === 'husky' && (<p>The goodest boy</p>)}
    </div>
  )
}

export default Dog;

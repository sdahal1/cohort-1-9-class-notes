import Dog from "./Dog";

function DogsList() {
  let dogs = [
    {
      name: "Weimaraner",
      imageUrl: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTW4PxJMmqKX-iGS1zCBki9xALaex4zaWFeyd1qDBkJwwzOGVyvx_dukVn6ieZBaodi2OOJ-PmXd_Y_JXI"
    },
    {
      name: "Black Labrador",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VYdwi7Va7pYjc92X56yZ9wHaEo%26pid%3DApi&f=1&ipt=4c8c7f5cd753248839eb9e0aa026b5ddfbaee3654fd836c089a601d7cdeb0244&ipo=images"
    },
    {
      name: "husky",
      imageUrl: "https://www.treehugger.com/thmb/guND_NFC38njvjrDdsMtTsvaUOU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/portrait-of-siberian-husky-on-snow-covered-field-1321125441-caba351f6be24932af51c65e1fbb28d9.jpg"
    }
  ];
  return (
    <main>
      <h2>Dogs List</h2>
      {dogs.map(dog => <Dog key={dog.name} name={dog.name} imageUrl={dog.imageUrl} />)}
      {/* <Dog name={dogs[0].name} imageUrl={dogs[0].imageUrl} />
      <Dog name={dogs[1].name} imageUrl={dogs[1].imageUrl} />
      <Dog name={dogs[2].name} imageUrl={dogs[2].imageUrl} /> */}
    </main>
  );
}

export default DogsList;

const { enterLibrary, leaveLibrary, checkOutBook } = require("./book-recommendor");

async function getARandomBook(libraryCard) {
    try{
      const response = await checkOutBook(libraryCard)
      console.log(`Your libraryCard info is this: ${libraryCard.name} - ${libraryCard.id}`);
      console.log(`Your random book is: ${response}.`);
    }
    catch(err){
      console.log(`Uh oh ${err}`);
    }
  // checkOutBook(libraryCard)
  //   .then((response) => {
  //     console.log(`Your libraryCard info is this: ${libraryCard.name} - ${libraryCard.id}`);
  //     console.log(`Your random book is: ${response}.`);
  //   })
  //   .catch((err) => {
  //     console.log(`Uh oh ${err}`);
  //   });
}

async function getKnowledge(libraryCard) {
  try{
    const responseFromEnteringLibaray = await enterLibrary();
    console.log(responseFromEnteringLibaray);
    const randomBookResponse = await getARandomBook(libraryCard);
    const leaveLibraryResponse = await leaveLibrary();
    console.log(leaveLibraryResponse);

  }catch(err){
    console.log(`Uh oh ${err}`);
  }

}



// getKnowledge()
getKnowledge({name:"Rob", id:"1"})



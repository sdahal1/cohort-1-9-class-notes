const axios = require("axios");
const { index, create } = require("../src/requests");
const BASE_URL = "http://localhost:5000";

describe("requests.js", () => {
  describe("index()", () => {
    const data = [
      {
        id: "HwLvy2S",
        name: "Ursa Minor",
        meaning: "Little Bear",
        starsWithPlanets: 6,
        quadrant: "NQ3",
      },
      {
        id: "dFBbdkr",
        name: "Vela",
        meaning: "Sails",
        starsWithPlanets: 7,
        quadrant: "SQ2",
      },
      {
        id: "dFBfdr",
        name: "Moon",
        meaning: "Sails",
        starsWithPlanets: 17,
        quadrant: "SQ3",
      },
    ];

    beforeEach(() => {
      jest.spyOn(axios, "get");
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a GET request to the appropriate URL", async () => {
      // Write code here
      // jest.spyOn(axios, "get"); //have the testing libary (jest) keep track of any axios.get() calls
      await index(); //call the index() function and wait for it to finish executing before moving on

      //make sure the axios.get() call we spied on called the appropriate url (api endpoint)
      const expectedURL = `${BASE_URL}/constellations`;
      expect(axios.get).toHaveBeenCalledWith(expectedURL);

      // jest.clearAllMocks(); //to finish the process and clear out the session
    });

    it("should return a list of constellations with fewer than 10 stars with planets", async () => {
      // Write code here
      // jest.spyOn(axios, "get");

      axios.get.mockImplementation(() => Promise.resolve({ data })); //make a fake api call rather than a real api call to our server. We make a fake call (mock implementation) of the axios.get() request so that we can make that fake call resolve with our static hardcoded constellations data from line 7. 

      const response = await index();

      const expected = data.slice(0, 2);
      expect(response).toEqual(expected);

    });

    it("should log an error to the console", async () => {
      // jest.spyOn(axios, "get");
      
      axios.get.mockImplementation(() => Promise.reject({message:"Oops I did it again"}));

      //spy on the console.error() call to make sure console.error() was called with the rejected error messaage
      jest.spyOn(console,"error");

      await index() //call the function to test it

      expect(console.error).toHaveBeenCalledWith("Oops I did it again")
      //if the axios.get call is rejected, we expect a console.error() to run
    });
  });

  describe("create()",()=>{
    //some fake response data for a post request
    beforeEach(() => {
      jest.spyOn(axios, "post");
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    const body = {name: "Lebron v2", team: "Warriors"}
    const newlyCreatedPlayer = {...body, id: 3}
    //the correct url is called in the post request
    it("the correct url is called in the axios.post() call", async ()=>{
      await create(body); //call the create() function and wait for it to finish executing before moving on

      //make sure the axios.post() call we spied on called the appropriate url (api endpoint)
      const expectedURL = `${BASE_URL}/players`;
      expect(axios.post).toHaveBeenCalledWith(expectedURL, body);
    })

    //if the post request is successful, it resolves a new player data
    it("if the post request is successful, it resolves a new player data", async () => {
      // Write code here
     
      axios.post.mockImplementation(() => Promise.resolve({ data:newlyCreatedPlayer })); //make a fake api call rather than a real api call to our server. We make a fake call (mock implementation) of the axios.post() request so that we can make that fake call resolve with our static hardcoded newlycreatedPlayer

      const response = await create(body);

      const expected = newlyCreatedPlayer
      expect(response).toEqual(expected);
    });


    //if the post requst is unsuccessful, it rejects with an error message that gets logged to the console
    it("should log an error to the console if post request is unsuccessful", async () => {
      
      axios.post.mockImplementation(() => Promise.reject({message:"Could not create player"}));

      //spy on the console.error() call to make sure console.error() was called with the rejected error messaage
      jest.spyOn(console,"error");

      await create(body) //call the function to test it

      expect(console.error).toHaveBeenCalledWith("Could not create player")
      //if the axios.get call is rejected, we expect a console.error() to run
    });
  })
});

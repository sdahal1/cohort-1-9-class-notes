function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
    return id && name && meaning && quadrant && starsWithPlanets;
  }
  
  function update(constellation) {
    //we get back apromise from an axios call
    axios.get(`${BASE_URL}/constellations`)
      .then((response)=>{
          console.log("response is this--->", response)
    })
      .catch(err=>{
      console.log("err looks like this-->", err)
    })
  }
  
  function bulkImport(constellations=[]) {
    //build an array of put requests for valid constellations
    //loop through constellations array
      //for each element, use the isValid() function above to pass in each constellation object and determine if its valid or not. If its valid, then you'll have a put request
    
    //return promise.allSettled(arrayOfPutRequestsGoesHere)
  }
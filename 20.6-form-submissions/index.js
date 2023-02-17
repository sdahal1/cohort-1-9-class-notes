const submitHandler = (event) =>{
  event.preventDefault();
  

  //to access information from the form inputs we can do this: 
  const formData = new FormData(event.target)
  const errors = validateForm(formData);
  // console.log(errors);
  //if there are no keys in errors object, that means form is good enough data to create a park section with
  if(Object.keys(errors).length === 0){
    
    const parkHtml = `<section class="park-display">
    <h2>${formData.get("name")}</h2>
    <div class="location-display">${formData.get("location")}</div>
    <div class="description-display">
      <p>
        ${formData.get('description')}
      </p>
      <div class="description-controls">
        <button class="expand_button">View Stats</button>
      </div>
    </div>
    <button class="rate-button" title="Add to Favourites">&#9734;</button>
    <div class="stats">
      <div class="established-display stat">
        <h3>Established</h3>
        <div class="value">${formData.get("established")}</div>
      </div>
      <div class="area-display stat">
        <h3>Area</h3>
        <div class="value">${formData.get("area")}<sup>2</sup></div>
      </div>
      <div class="rating-display stat">
        <h3>Rating</h3>
        <div class="value">${formData.get("rating")}</div>
      </div>
      <div>
        <button class="toggle-visited">Mark Visited</button>
      </div>
    </div>
  </section>`

  //select the element that will add this section as its child
  const main = document.querySelector("main");
  main.innerHTML += parkHtml;
  }else{
    //if there are errors in the form, then unhid the error divs relevant to the form inputs that are invalid
    Object.keys(errors).forEach(key=>{
      console.log(key)
      const divToUnhide = document.querySelector(`#${key}-error`);
      divToUnhide.classList.remove("error");
      // <div class="error" id="name-error">Please enter a name</div>
    })
  }

}


  


function validateExists(value) {
  return value && value.trim();
}

function validateNumber(value) {
  return !isNaN(value);
}

function validateRange(value, min, max) {
  return value >= min && value <= max;
}

function validateForm(formData) {
  const errors = {};

  // Check if name was entered
  if (!validateExists(formData.get("name"))) {
    errors.name = "Please enter a name";
  }

  // Check if rating was entered
  if (!validateExists(formData.get("rating"))) {
    errors.rating = "Please enter a rating";
  }else if (!validateNumber(formData.get("rating"))){
    errors.rating = "Please enter a number"
  }else if(!validateRange(Number(formData.get("rating")),0,5 )){
    errors.rating = "Invalid range"
  }

  // Check if description was entered
  if (!validateExists(formData.get("description"))) {
    errors.description = "Please enter short description";
  }

  // Check if established date was entered
  if (!validateExists(formData.get("established"))) {
    errors.established = "Please enter date";
  }

  // Check if area was entered
  if (!validateExists(formData.get("area"))) {
    errors.area = "Please enter the area of the park";
  }

  // Check if location date was entered
  if (!validateExists(formData.get("location"))) {
    errors.location = "Please enter the location of the park";
  }
  // console.log("errors", errors);
  return errors;
}




//events so far: click, submit





function main() {
  //select the form element and add a submit event listener to it
  const parkForm = document.querySelector("#park-form");
  parkForm.addEventListener("submit", submitHandler);
}

window.addEventListener("DOMContentLoaded", main )

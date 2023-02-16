function shortenDescriptions(){
    //select all the descriptions of parks
    const allDescriptions = document.querySelectorAll(".description-display");
    //for each description
    allDescriptions.forEach((descriptionDiv)=>{
        // console.log(descriptionDiv.innerText.length)
        //count how many characters there are in the description elements innerText
        //if description.innertext.length is > 250, 
        if(descriptionDiv.innerText.length > 250){
            // then shorten the descriptoin to be only 250 characters and add "..." at the end
            let shortenedText = descriptionDiv.innerText.slice(0,250);
            // console.log(shortenedText);
            //update description div's innertext property to be the new shortened text
            // descriptionDiv.innerText = shortenedText + '<a href="">...</a>'
            descriptionDiv.innerHTML = shortenedText + '<a href="">...</a>'
        }
    })
}


function highlightHighRatedParks(){
    const allParkSections = document.querySelectorAll(".park-display");
    allParkSections.forEach((section)=>{
        // console.log(section.querySelector(".rating-display .value").innerText);
        const parkRating = section.querySelector(".rating-display .value");
        const ratingButton = section.querySelector(".rate-button");
        // console.log(parkRating)
        if(Number(parkRating.innerText) >= 4.7){
            //update the buttons style to be yellow background color
            ratingButton.style.backgroundColor = 'yellow';
            parkRating.style.border = "1px solid red";
            parkRating.style.fontSize = "100px";
            parkRating.style.textDecoration = "underline";

        }
    })
    //look at each parks section so we can access the rating and button for that section
        //if the parks rating is 4.7 and up, highlight the button for that park
}

shortenDescriptions();
highlightHighRatedParks();
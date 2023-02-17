/* ~~~~~~~~~~~~~~~~~~~~~~~~ 20.5 Event Listeners Platform examples~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function highlightFavParks() {
    const allRateButtons = document.querySelectorAll(".rate-button");

    allRateButtons.forEach((rateBtn) => {
        rateBtn.addEventListener("click", (event) => {
            console.log("you clicked me", event);
            console.log(event.target); //represents the element that was clicked
            // if(event.target.style.backgroundColor === "yellow"){
            //     event.target.style.backgroundColor = "gray"
            // }else{
            //     event.target.style.backgroundColor = "yellow";
            // }

            const parentSection = event.target.parentNode;

            if (event.target.classList.contains("rate-button")) {
                event.target.classList.remove("rate-button");
                event.target.classList.add("favoriteButton");

                //update the parent (section) to have a thick highlighted border
                parentSection.style.backgroundColor = "blue";
                parentSection.style.color = "white";
                parentSection.style.border = "2px solid yellow";
            } else {
                event.target.classList.add("rate-button");
                event.target.classList.remove("favoriteButton");
            }

            //element properties: .innerText, .innerHTML, .style,  .classList, .remove(), .parentNode
        });
    });
}



function ratingSorterClickHandler(event) {
    //prevent the link from reloading the page
    console.log(event);
    event.preventDefault();
    //when that element is clicked, have it sort the parks by the rating

    //first get all the sections
    const allParkSections = document.querySelectorAll(".park-display");
    //turn the NodeList into an array of section elements so we can do .sort() on it
    const allParkSectionsArray = Array.from(allParkSections);
    console.log(allParkSectionsArray);
    //sort them by the rating value
    allParkSectionsArray.sort((sectionA, sectionB) => {
        //get the rating from sectionA and convert it to a number
        let sectionARating = Number(
            sectionA.querySelector(".rating-display .value").innerText
        );
        //get the rating form sectionB
        let sectionBRating = Number(
            sectionB.querySelector(".rating-display .value").innerText
        );

        return sectionBRating - sectionARating;
    });

    //now that allParkSectionsArray is sorted, we can insert each park section from this array as a child to main

    //first clear out main with its unsorted parks
    const main = document.querySelector("main");
    main.innerHTML = "";

    allParkSectionsArray.forEach((parkSection) => {
        //attach the parksection as a child to main
        main.appendChild(parkSection);
    });
}

window.addEventListener("DOMContentLoaded", (event) => {
    //select the element that we need to click on to sort the parks
    const ratingLink = document.querySelector("#rating-sorter");
    //make that element listen for a click event
    ratingLink.addEventListener("click", ratingSorterClickHandler);
});



/* ~~~~~~~~~~~~~~~~~~~~~~~~ 20.5 Event Listeners Assessment Study guide~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function expandArticleBody() {
    //target all the view stats buttons 
    const statsButtons = document.querySelectorAll(".expand_button")
    //have them all listen for a click event
    statsButtons.forEach((button)=>{
        button.addEventListener("click", (event)=>{
            //get the parent park section of the button that was clicked
            const parkSection = event.target.parentNode.parentNode.parentNode;
            //target the stats div in this buttons's section
            const statsDiv = parkSection.querySelector(".stats")

            //if the button says "View Stats" then unhide the div
            if(event.target.innerText === "View Stats"){
                //remove the .hidden class from the stats div 
                statsDiv.classList.remove("hidden");
    
                //change text of button to say "hide stats"
                event.target.innerText = "Hide Stats";
            }else{
                //remove the .hidden class from the stats div 
                statsDiv.classList.add("hidden");
    
                //change text of button to say "hide stats"
                event.target.innerText = "View Stats";
            }
        })
    })

}

function crossOffArticle() {
    //select all the "Mark visited" buttons
    const allMarkVisitedButtons = document.querySelectorAll(".toggle-visited")

    //add event listener to each one
    allMarkVisitedButtons.forEach((button)=>{
        button.addEventListener("click", (event)=>{
            const parkSection = event.target.parentNode.parentNode.parentNode;
            parkSection.style.textDecoration = "line-through"
        })
    })
}

function main() {
    expandArticleBody();
    crossOffArticle();
    highlightFavParks();
    // ratingSorterClickHandler();
}
main();

/* 
1. addHeadingsAndImages-> make all <article>Puppy</article> look like 
        <article>
            <h3>Puppy</h3>
            <img src = "linkgoeshere">
        </article>
2. styleKittensandPuppies-> style all cats and dogs by adding the classlist "kitten" or "puppy" to the article containing either a kitten or a puppy
    eg: <article><h3>Puppy</h3></article> will look like <article class="puppy"><h3>Puppy 1</h3></article> and <article class="kitten"><h3>Kitten 1</h3></article>
3. separateCatsFromDogs
    -create a "kittens" section with the class of "kittens" to put kitten articles into
    -if the article has a kitten, remove it from that section and add it to a new section for kittens
*/



let images = [
    "https://media.tenor.com/BlHLysXBit4AAAAC/puppy-love-hi.gif",
    "https://media.tenor.com/PTBNHIGHS-kAAAAd/dog-smile.gif",
    "https://media.tenor.com/bK1qpWGyQKkAAAAM/kitty.gif",
    "https://media.tenor.com/avkEJ6QsXLcAAAAM/puppy.gif",
    "https://media.tenor.com/XybizgnL1zQAAAAM/kittens-cute.gif",
    "https://media.tenor.com/gZHJZ3gNDYwAAAAM/cute-cat.gif",
    "https://media.tenor.com/JMv_beVhW98AAAAM/perrete.gif",
    "https://media.tenor.com/g9bkJfFtovMAAAAM/dog.gif",
    "https://media.tenor.com/kKvpaWwGoPcAAAAM/stretch-kitty.gif",
    "https://media.tenor.com/WT7snNMnZoMAAAAM/luv-you-cute-kitten.gif"
];




function addHeadingsAndImages(){
    //select all the articles
    const allArticles = document.querySelectorAll("article");
    console.log(allArticles);
    //for each article, update their inner html
    allArticles.forEach((article,idx)=>{
        //create an element (this does not put the element in the DOM yet)
        let h3Tag = document.createElement("h3");
        h3Tag.innerText = article.innerText;
        // if(article.innerText.includes("Puppy")){
        //     h3Tag.innerText = "Puppy"
        // }else{
        //     h3Tag.innerText = "Kitten"
        // }
        // console.log(h3Tag)
        article.innerText = "";
        article.appendChild(h3Tag)

        //create an image element;
        const imageElement = document.createElement("img");
        imageElement.src = images[idx]
        article.appendChild(imageElement);
        // article.innerHTML = "<img src= '' />"
    })
}

addHeadingsAndImages();




// 2. styleKittensandPuppies-> style all cats and dogs by adding the classlist "kitten" or "puppy" to the article containing either a kitten or a puppy
//     eg: <article><h3>Puppy</h3></article> will look like <article class="puppy"><h3>Puppy 1</h3></article> and <article class="kitten"><h3>Kitten 1</h3></article>



function styleKittensandPuppies(){
    const allArticles = document.querySelectorAll("article"); 

    allArticles.forEach((article)=>{
        //add the classlist of puppy to each article
        if(article.innerText.toLowerCase().includes("puppy")){
            article.classList.add("puppy")
        }else{
            article.classList.add("kitten")
        }
    })
}


styleKittensandPuppies();





// 3. separateCatsFromDogs
//     -create a "kittens" section with the class of "kittens" to put kitten articles into
//     -if the article has a kitten, remove it from that section and add it to a new section for kittens

function separateCatsFromDogs(){
    //create a section element
    const kittensSection = document.createElement("section");
    //give the section a class of "kittens"
    kittensSection.classList.add("kittens");
    //SELECT a reference point to an element that will be accepting this section as a child (div class="row")
    const rowDiv = document.querySelector(".row");
    //div.appendChild(section) - append the section as a child to the div.row
    rowDiv.appendChild(kittensSection);




    // Get the parent element of all articles
    const puppiesSection = document.querySelector(".puppies");

    // Select all articles so that we can go through each article and see if its should be stay in puppiesSection or move to kittensSection
    const allArticles = document.querySelectorAll("article");
    // const iseverythingaPuppy = Array.from(allArticles).every(elem=>{
    //     return elem.innerText.toLowerCase().includes("puppy");
    // })
    // console.log(iseverythingaPuppy)
    allArticles.forEach(article=>{
        
        //if the article's inner text contains "kitten" then remove it from puppiesSection and insert it as a child to the kittensSection
        if(article.innerText.toLowerCase().includes("kitten")){
            // then remove it from puppiesSection
            // puppiesSection.removeChild(article)
            kittensSection.appendChild(article);

        }

    })

    // Remove that park
    // main.removeChild(park);
}

separateCatsFromDogs();











/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~solutions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


// function addHeadingsAndImages(){
//     let articles = document.querySelectorAll("article");
//     for(let i = 0; i< articles.length; i++){
//         let article = articles[i];
//         let h2 = document.createElement("h2");
//         let imgTag = document.createElement("img");
//         imgTag.src = images[i];
//         h2.innerText = article.innerText;
//         article.innerText = "";
//         article.appendChild(h2);
//         article.appendChild(imgTag);
//     }
// }

// addHeadingsAndImages();




/**
  Write the addheadings() function here
*/

// function addHeadings(){
//     let articles = document.querySelectorAll("article");
//     for(let article of articles){
//       let h1 = document.createElement("h2");
//       h1.innerText = article.innerText;
//       article.innerText = "";
//       article.appendChild(h1);
//     }
//   }

//   addHeadings();
  
//   /**
//     Write the styleTutorialsAndArticles() function here
//   */
  
//   function styleTutorialsAndArticles(){
//     let articles = document.querySelectorAll("article");
//     for(let article of articles){
//       console.log(article.innerText)
//       if(article.innerText.toLowerCase().includes("tutorial")){
//         article.classList.add("tutorial")
//       }else{
//         article.classList.add("article")
//       }
//     }
//   }
  
//   /**
//     Write the separateAllTutorials() function here
//   */
  
//   function separateAllTutorials(){
//     let articles = document.querySelectorAll("article");
//     let articlesSection = document.querySelector(".articles")
//     let tutorialsSection = document.createElement("section");
//     tutorialsSection.classList.add("tutorials");
//     for(let article of articles){
     
//       if(article.innerText.toLowerCase().includes("tutorial")){
//         articlesSection.removeChild(article);
//         tutorialsSection.appendChild(article);
//       }
//     }
  
//     let container = document.querySelector(".container");
//     container.appendChild(tutorialsSection);
//   }


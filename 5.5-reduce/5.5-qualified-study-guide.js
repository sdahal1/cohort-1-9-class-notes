/* 


const areas = [768, 1004.2, 433.1];
let initialValue = 200;
let result = areas.reduce((total, area, i) => {
    console.log({total, area, i})
    return total + area
});
console.log(result); //> 2405.3

*/

const movies = [
    {
        title: "Austin Powers",
        views: 1000,
        producer: { 
            name: "Universal Studios",
            city: "Los Angeles"
        }
    },
    {
        title: "Finding Nemo",
        views: 2000,
        producer: { 
            name: "Disney",
            city: "Orlando"
        }
    },
    {
        title: "Forrest Gump",
        views: 3000,
        producer: { 
            name: "Universal Studios",
            city: "Los Angeles"
        }
    },
];


/* Add up all the views numbers */

function totalViews(movies=[]){
    const total = movies.reduce((accumulator,element, index)=>{
        // accumulator+=element.views;
        // return accumulator;
        return accumulator+element.views
    },0)

    return total;
}

// console.log(totalViews(movies))



/* given an array of movie objects, return an object where each key is a movie title, and the value is the producer name 
Example output:
{
  'Austin Powers': 'Universal Studios',
  'Finding Nemo': 'Disney',
  'Forrest Gump': 'Universal Studios'
}

*/

function movieAndProducerName(movies=[]){
    let result = movies.reduce((accumulator,element)=>{
        //create a key in accumulator reperesenting the movie title
        //make the value the movie producer name
        accumulator[element.title] = element.producer.name
        return accumulator;
    },{})

    return result;
}


// console.log(movieAndProducerName(movies));

/* given an array of movie objects, return an object where each key is the producer name, and each value is an array of movies associated with that producer name 

example output: 

{
  'Universal Studios': [
    { title: 'Austin Powers', views: 1000, producer: [Object] },
    { title: 'Forrest Gump', views: 3000, producer: [Object] }
  ],
  Disney: [ { title: 'Finding Nemo', views: 2000, producer: [Object] } ]
}

{
    "Universl studios": [
        { title: 'Austin Powers', views: 1000, producer: [Object] },
         { title: 'Forrest Gump', views: 3000, producer: [Object] }
    ],
    "Disney": [{ title: 'Finding Nemo', views: 2000, producer: [Object] }]
}

*/

function movieByProducer(movies=[]){
    return movies.reduce((accumulator, element)=>{
        //key represents element.producer.name
        //if the accumulator has the producer as a key already, then add to the end of the array the current movie element
        if(accumulator[element.producer.name]){
            accumulator[element.producer.name].push(element)
        }else{
            //else, set the value to be an array with the current element only
            accumulator[element.producer.name] = [element]

        }
        return accumulator;
    },{})
    
}

console.log(movieByProducer(movies))
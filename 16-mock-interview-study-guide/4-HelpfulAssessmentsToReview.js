
//13.5- Promise Assessment

        //1. How to do promise chaining
        //2. That if you return a promise inside of a funciton, you can call that function and do .then() on the function call
        function getCoins(){
            return axios.get("urltocoinsapi")
        }
        const getMoney = ()=> {
            return axios.get("urltocoinsapi")
        }

        getMoney()
            .then(res=>{
                //here res represents whatever was resolved from the axios.get() call
            })

        //3. If you return a value inside of a .then() callback, its available in the next .then()'s callback parameter
            
        function getCoins(){
            return axios.get("urltocoinsapi")
                .then(res=>{
                    return res.data[0] //{bitcoin object}
                })
                .catch(err=>{
                    return "Oops i did it agin, ther is an error"
                })
        }

        getCoins()
            .then(res=>{
                //here res represents whatever was resolved from the axios.get() call or whatever the previous .then() or .catch() returned
                console.log("res is this", res)
            })


        //4. Shorthand syntax for .then() and .catch()
        function getCoins(){
            return axios.get("urltocoinsapi")
                // .then((res)=>{
                //     console.log(res)
                // })
                .then(console.log)
        }


//14.3 - Postman -> Just know how to use postman to test an api



//14.5 - Requests in Javascript
        //1. Know how to make get requests using axios
        //2. Know how to format the response that comes back from the api (eg: response is an array of objects, reformat that to only be an array of names)
//14.7 - Assessment -> Making requests
        //1. Know how to use axios to make api calls
        //2. Refer to Part 3 of this study guide for more examples


//15.2 - Promise Chaining
        //1. How to do promise chaining
        //2. That if you return a promise inside of a funciton, you can call that function and do .then() on the function call

//15.3 - Resolve and Reject
        //1. You can also do Promise.resolve() or Promise.reject() with some values and that creates promises too

//15.5 - Async Await
        //1. Given the .then() .catch() syntax, be able to convert that to async await syntax
        //2. The assessment will help you practice that


//Bonus review: DO PART 2 OF THIS STUDY GUIDE!







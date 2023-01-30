const {averageScore, get2LowestScoringStudents} = require("../src/main");
const expect = require("chai").expect; //expect() allows us to compare actual vs expected and make a test fail/pass based on if actual is equal to expected



describe("averageScore", ()=>{
    //1. test that averageScore is actually a function
    it("test that averageScore is actually a function",()=>{
        const expected = "function";
        const actual = typeof averageScore;
        expect(actual).to.equal(expected);
    })
    //2. test that averageScore actually returns the expected average score from a valid data set (happy path)
    it("test that averageScore actually returns the expected average score from a valid data set (happy path)",()=>{
        const dataset = [
            { name: "Shane Carey", score: 10 },
            { name: "Rebecca Mills", score: 8 },
            { name: "Catarina Lima", score: 9 },
        ]
        const expected = 9;
        const actual = averageScore(dataset);
        expect(actual).to.equal(expected);
    })
    //3. test that averageScore returns null for empty data set or undefined data set
    it("test that averageScore returns null for empty data set or undefined data set", ()=>{
        const expected = 0;
        const actual = averageScore();
        expect(actual).to.equal(expected);
    })
})


describe("get2LowestScoringStudents",()=>{
    //that its a function
    it("that its a function", ()=>{
        const expected = "function";
        const actual = typeof get2LowestScoringStudents;
        // expect(actual).to.equal(expected);
        expect(get2LowestScoringStudents).to.be.a("function");
        
    })
    //that it works in happy path
    it("it works in happy path", ()=>{
        const dataset = [
            { name: "Shane Carey", score: 10 },
            { name: "Rebecca Mills", score: 8 },
            { name: "Lima Beans", score: 3 },
            { name: "Catarina Lima", score: 9 },
            { name: "Kidney Beans", score: 4 },
        ]

        const expected = [
            { name: "Lima Beans", score: 3 },
            { name: "Kidney Beans", score: 4 }
        ]

        const actual = get2LowestScoringStudents(dataset)

        expect(actual).to.eql(expected);
    })
    //that it returns [] if not students scored below 5

    it('it returns [] if not students scored below 5', ()=>{
        const dataset = [
            { name: "Shane Carey", score: 10 },
            { name: "Rebecca Mills", score: 8 },
            { name: "Catarina Lima", score: 9 }, 
        ]

        const expected = [
           
        ]

        const actual = get2LowestScoringStudents(dataset)
        expect(actual).to.eql(expected);
    })
})
const {assignGrade} = require("../src/main")
const expect = require("chai").expect;


describe("averageScore", () => {
    // More will go here
    it("should give the correct grade for A", ()=>{
        const actual = assignGrade(0.95)
        const expected = "A"
        expect(actual).to.equal(expected);
    })

    it("should give the correct grade for B", ()=>{
        const actual = assignGrade(0.83)
        const expected = "B"
        expect(actual).to.equal(expected);
    })

    it("should give the correct grade C", ()=>{
        const actual = assignGrade(0.72)
        const expected = "C"
        expect(actual).to.equal(expected);
    })
    
});
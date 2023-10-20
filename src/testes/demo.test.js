/**
 * ecrire un test simple
 */
 
describe('pack démo', function(){

    test ('demo somme',function(){

        const a= 2+2
        expect(a).toBe(4)
    })

    it('demo somme 2',function(){
        const b=3+3
        expect(b).toBe(6)
    })
})

/**
 * autre moyene
 */
const demo = require("../demo");

test("demo() addition", () => {
  const result = demo(1, 2)
  expect(result).toBe(3)
});

it("should retourn 7", function(){
    const a= 8
    expect(a).toBe(8)
})
/**
 *I have a function with many factories, I  know how to match them
 */
const sum = require("../demo");

it("should retourn sum",()=>{
    console.log(sum(10,10,40))
    expect(sum(10)).toBe(10)
})
/**
 *I have a function with many factories, but I don't know how to match them
 */
 const theSum = require("../demo");
 it("should retourn sum",()=>{
    console.log(theSum(10,10,400))
    expect(theSum(100,1,10,40,50)).toBe(201)
})
 
it("should retourn sum",()=>{
   expect(theSum()).toBe(0)
})
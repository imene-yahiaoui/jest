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
const demo = require("./demo");

test("demo() addition", () => {
  const result = demo(1, 2)
  expect(result).toBe(3)
});

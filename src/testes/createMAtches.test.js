//cree un match

expect.extend({
  //le nom de ma match et elle prend quoi comme arrgumment
  toBeAkberThen(received, target) {
    //comment elle marche
    const pass = received > target;
    //si il est correct
    if (pass) {
      return {
        //le msg
        message: () => `Expected ${received} To Be Akber Than ${target}`,
        //true donc vert
        pass: true,
      };
    }
    //sinon
    else {
      return {
        //le msg d 'err qui va saffichier
        message: () => `Err Expected ${received} To Be Akber Than ${target}`,
        //false rouge
        pass: false,
      };
    }
  },
});

test("check akber", () => {
  expect(10).toBeAkberThen(1);
});

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

///

//expect anything ==>==>==>==>=>==> match tout sauf null et undifiend

test("blabla", () => {
  expect("blabla").toEqual(expect.anything());
});

//expect any (constructor)
test("expect any constructor", () => {
  expect(2).toEqual(expect.any(Number));
});

//expect arrayContaining(array)
test("expect arrayContaining", () => {
  const arr = [2, 4, 6, 8, 10];
  expect(arr).toEqual(expect.arrayContaining([10, 2]));
});

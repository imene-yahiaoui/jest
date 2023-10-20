const arr = require("../all");
//il ya 6 numero dans la list
it("if arr have 6 numbre", () => {
  console.log(arr);
  console.log(arr.length);
  expect(arr.length).toBe(6);
});
//il ya 6 numero dans la list
it("if arr have 6 numbre", () => {
  expect(arr).toHaveLength(6);
});
//il ya pas 9 numero dans la list
it("if arr dont have 9 numbre", () => {
  expect(arr).not.toHaveLength(9);
});
//la list contien le numero 1
it("if arr contains numbre 1", () => {
  expect(arr).toContain(1);
});

//la list ne contien pas le numero 1
it("if arr not contains numbre 9", () => {
  expect(arr).not.toContain(9);
});
//la list ne contien pas le numero 0 en utilisant une boucle
it("if arr not contains numbre 0", () => {
  for (let i = 0; i < arr.length; i++) {
    expect(arr[i]).not.toContain(0);
  }
});

//la list ne contien pas des lettre en utilisant une boucle
it("if arr not contains numbre 0 firs Method", () => {
  for (let i = 0; i < arr.length; i++) {
    expect(isNaN(arr[i])).toBe(false);
  }
});
//la list ne contien pas des lettre en utilisant une boucle
it("if arr not contains numbre 0 secend Method", () => {
  for (let i = 0; i < arr.length; i++) {
    expect(isNaN(arr[i])).toBeFalsy;
  }
});
//la list ne contien pas des lettre en utilisant une boucle
it("if arr not contains numbre 0 3rd Method", () => {
  for (let i = 0; i < arr.length; i++) {
    expect(isNaN(arr[i])).not.toBeTruthy;
  }
});

///le 2 numero de la liste >1
//toBeGreaterThan =>plus grand que
//toBeGreaterThanOrEqual =>plus grand  que ou egale
it("if arr not contains numbre 0 3rd Method", () => {
  expect(arr[1]).toBeGreaterThanOrEqual(1);
});

///le 1 numero de la liste <1
//toBeLessThan =>plus petit que
//toBeLessThanOrEqual =>plus petit  que ou egale
it("if arr not contains numbre 0 3rd Method", () => {
  expect(arr[0]).toBeLessThanOrEqual(1);
});
//toBeUndefined
it("check undefined", () => {
  expect(arr[9]).toBeUndefined();
});

//toMatch : trouve un mot dans une phrase
it("check for substring inside string ", () => {
  const muString = "hello you , i know you read project now ";
  expect(muString).toMatch(/you/);
});

//toHaveProperty : trouve une property
it("check if i have a property ", () => {
  const muString = {
    me:"imene",
    you:"x",
    code:"jest"
  }
  expect(muString).toHaveProperty("code");
});
//toHaveProperty : trouve une property and value
it("check if i have a property and value", () => {
    const muString = {
      me:"imene",
      you:"x",
      code:"jest"
    }
    expect(muString).toHaveProperty("code","jest");
  });
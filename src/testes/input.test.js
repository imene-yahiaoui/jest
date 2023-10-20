const filtreName = require("../input");

describe("Check input", () => {
  //le nom vide
  it("if name is Empty", () => {
    expect(filtreName()).toBe("null");
  });
  //le nom avec espace avant ou apres
  it("if name is wthi space", () => {
    expect(filtreName("    al-Khwārizmī   ")).toBe("al-Khwārizmī");
  });
  //   //si je veux prendre les premier 17 lettre de le nom
  it("ckeck if name length > 10", () => {
    expect(filtreName("Muḥammad ibn Mūsā al-Khwārizmī")).toBe(
      "Muḥammad ibn Mūsā"
    );
  });
});

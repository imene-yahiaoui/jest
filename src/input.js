function filtreName(name) {
  //si le nom est vide
  if (name === undefined) {
    name = "null";
  }
  // si le nom avec espace avant ou apres
  if (name.startsWith("") || name.endsWith("")) {
    name = name.trim();
  }
//   //si je veux prendre les premier 17 lettre de le nom
  if (name.length > 10) {
    name = name.substring(0, 17);
  }
 
  return name;
}

module.exports = filtreName;

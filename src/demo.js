module.exports = (a, b) => a + b;

/**
 *I have a function with many factories, I  know how to match them
 */
const sum = (a, b, c) => {
  return (a || null) + (b || null) + (c || null);
};

module.exports = sum;

/**
 *I have a function with many factories, but I don't know how to match them
 */

const theSum = (...numbers) => {
  return numbers.reduce((pv, cv) => pv + cv, 0);
  //ps: jai ajouté ',0' en cas ou ya pas des numero il va me retourner 0
};
module.exports = theSum;

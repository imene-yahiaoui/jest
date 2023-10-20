module.exports = (a, b) => a + b;

/**
 * function with many factories
 */
const sum = (a, b, c) => {
  return (a || null) + (b || null) + (c || null);
};

module.exports = sum;

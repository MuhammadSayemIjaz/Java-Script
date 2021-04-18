let array = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const getUniqueValues  = (array1) => (
  [...new Set(array1)]
);
console.log(getUniqueValues(array));

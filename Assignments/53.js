let array = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const unique = [...new Set (array)];
const del =  unique.splice(0,0);
console.log(del);

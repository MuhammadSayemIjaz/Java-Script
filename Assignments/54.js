let array1 = ["Apple" , "Bannana" , "Peach"];
let array2 = ["Tommato", "Potato", "Onion"];
let array3 = ["Ice cream" , "Burgers"];
console.log("Before Concatination");
console.log(array1 , array2 , array3);
let concatinate = [...array1, ...array2, ...array3];
console.log("After Concatination");
console.log(concatinate);

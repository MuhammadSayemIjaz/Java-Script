let array  = ["ABC" , "DEF" , "GHIJ" , "KLMNO"];
let a = Number(prompt("Enter position of element Which you want to delete (0 to 4)"));
console.log("Array Before deletion of element");
console.log(array);
  array.splice(a,1);
  console.log("Array After deletion of specific element");
  console.log(array);

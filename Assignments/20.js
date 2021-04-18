let a = Number( prompt("Enter Value of A "));
let b = Number(prompt("Enter Value of B "));
let c = Number(prompt("Enter Value of C "));

console.log("A = " + a);
console.log("B = " + b);
console.log("C = " + c);

if ( a > b && a > c) {
  console.log(a + "  is Maximum Number");
}else if (b > a && b > c){
  console.log(b + "  is Maximum Number");
}else if(c > a && c > b){
  console.log(c + "  is Maximum Number");
}

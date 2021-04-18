let a = Number(prompt("Enter Value of a"));
let b = Number(prompt("Enter Value of b"));
let exp = ( a > b );
switch (exp) {
  case true:
    console.log(a + "is Maximum Number");
    break;
  case false:
    console.log(b + "is Maximum Number");
    break;
  default:
    console.log("Wrong Input");
}

let a =Number(prompt("Enter First Value"));
let b =Number(prompt("Enter Second Value"));
let c = prompt("Enter Expression");
switch (c) {
  case '+':
    console.log("A = " + a + "  B = "+b);
    console.log("Sum = " + (a+b));
    break;
  case '-':
    console.log("A = " + a + "b = "+b);
    console.log("Sum = " + (a-b));
    break;
  case '/':
    console.log("A = " + a + "b = "+b);
    console.log("Sum = " + (a/b));
    break;
  case '*':
    console.log("A = " + a + "b = "+b);
    console.log("Sum = " + (a*b));
    break;
  default:
    console.log("You Enter Wrong Input");
}

let a = Number(prompt("Enter Value of a"));
let b = Number(prompt("Enter Value of b"));
let c = Number(prompt("Enter Value of c"));

let discriminant = Math.sqrt(b*b - 4 * a * c );
let root_part = discriminant > 0;
 switch (root_part) {
   case true:
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
   console.log("Root1 =" + root1  + "Root2" + root2);
     break;
  case  false:
    root1 = root2 = -b / (2 * a);
    console.log("Root1" + root1 + "Root2" + root2);
    break;
   default:
   let realPart = (-b / (2 * a)).toFixed(2);
   let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
       console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
 }

let d , c , a;
let r = prompt("Enter Radius of a Circle");
function CalDiameter() {
        d = 2*r;
        console.log("Diameter = " + d);
      }
function CalCircum() {
      c = 2*(22/7)*r;
      console.log("Circumference = " + c);
}
function CalArea() {
     a = (22/7) * r * r ;
     console.log("Area = " + a);
}
console.log(CalDiameter());
console.log(CalCircum());
console.log(CalArea());

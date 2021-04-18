let a = prompt("Enter Value of a");
let b = prompt("Enter Value of b");
function CalMax() {
    if (a > b){
      console.log(a + "  is Maximum Number");
      console.log(b + "  is Minimum Number");
    }
}
function CalMin() {
  if (a < b){

    console.log(b +  "   is Minimum Number");
    console.log(a +  "   is Minimum Number");
  }
}
console.log(CalMax());
console.log(CalMin());

let b = prompt("Enter Value of a");
let a = prompt("Enter Value of b");
let c = prompt("Enter Value of c");
let Show = (a > b && a > c) ? a : (b > a && b > c) ? b :
            (c > a && c > b ) ? c : null ;
console.log("Maximum Number = " + Show);

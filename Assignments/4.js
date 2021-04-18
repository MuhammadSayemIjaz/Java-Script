let a = prompt("Enter Value");
var alphabets = 0, digits = 0 ; specialChars = 0 ;
for (let  i = 0 ; i < a.length ; i++){
  let ch = a[i];
  if((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")){
    alphabets++;
  }else if (ch >= "0" && ch <= "9") {
    digits++;
  }else {
    specialChars++
  }
}
console.log("Alphabets = " + alphabets);
console.log("Digits = " + digits);
console.log("Special Characters = " + specialChars);

// var vewels = (/[aeiouAEIOU]/gi)
// var specialChars = (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi);
// var alphabets = (/[abcdefghijklmnopqrstuvwxyz]/)

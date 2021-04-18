let a = prompt("Enter Value");
if ((a >= 'a' && a <= 'z') || (a >= 'A' && a <= 'Z')) {
  console.log("This is Alphabet");
}else if ( a >= 0 && a <= 99999999999) {
  console.log("This is Digit");
}else {
  console.log("This is Special Character");
}

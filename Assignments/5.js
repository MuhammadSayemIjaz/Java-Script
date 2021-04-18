let a = prompt("Enter Value");
console.log(a);
  let vowels = a.match(/[aeiouAEIOU]/gi).length
  let consonents = a.match(/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]/gi).length

  console.log("Consonents = " + consonents);
  console.log("Vowels = " + vowels);

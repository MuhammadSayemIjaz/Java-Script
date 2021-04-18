var number = prompt('Enter a three-digit positive integer: ');
function calArmStrong(number) {
  let sum = 0;
  let temp = number;
  while (temp > 0) {
      let remainder = temp % 10;

      sum += remainder * remainder * remainder;

      temp = parseInt(temp / 10);
  }
  if (sum == number) {
      console.log(`${number} is an Armstrong number`);
  }
  else {
      console.log(`${number} is not an Armstrong number.`);
  }
}function calPerfectNumber(number) {
  let sum = 0 ;
  let temp = number;
    for (let i = 0; i < number; i++) {
        if(number%i == 0){
          sum += i ;
        }
    }
    if(number == sum){
      console.log(`${number} is an Perfect number`);
    }else {
      console.log(`${number} is not an Perfect number.`);
    }
}
function isPrime(number) {

  if (number === 2) {
    return true;
  } else if (number > 1) {
    for (var i = 2; i < number; i++) {

      if (number % i !== 0) {

        console.log(`${number} is a Prime number`);
          break;
      } else if (number === i * i) {
        console.log(`${number} is not a Prime number`);
        break;
      } else {
        console.log(`${number} is not a Prime number`);
        break;
      }
    }
  } else {
    console.log(`${number} is not a Prime number`);
  }
}

console.log(isPrime(number));
console.log(calPerfectNumber(number));
console.log(calArmStrong(number));

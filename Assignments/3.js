let a = prompt("Enter String");
function toggleCase(a) {
  return a.toUpperCase().split(' ').map(function(word) {
    return (word.charAt(0).toLowerCase() + word.slice(1));
  }).join(' ');
}
console.log(toggleCase(a));

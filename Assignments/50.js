let array = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counts = {};
for (var i = 0; i < array.length; i++) {
  var num = array[i];
  counts[num] = counts[num]? counts[num]+1 : 1;

}
console.log(counts);

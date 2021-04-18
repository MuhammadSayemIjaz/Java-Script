let array = [-1, -2 , -3 , -4 , -5 , 6 , 7];
var negative = 0 ;
for (var i = 0; i < 7; i++) {
      if(array[i] < 0){
          negative++
      }
}
console.log("Negative Elements in Array= " + negative);

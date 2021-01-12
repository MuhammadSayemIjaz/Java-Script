// Average Counter
// Calculate Average 

function Show(InputOne , InputTwo , InputThree) {
    let Average ;
    Average = (InputOne+InputTwo+InputThree)/3;
    console.log("Average = " , Average);
    if (Average > 80 ) {
        console.log("!You are above standard, Admission Granted!");
    }
}
console.log("Number of students = 90  ");
console.log("Number of students = 80  ");
console.log("Number of students = 100 ");
Show(90 , 80 ,  100);
class cylinder {
   CalVol() {
     let r = Number(prompt("Enter Radius")) ;
     let h = Number(prompt("Enter Height")) ;
    let vol = (22/7)*r*2*h;
    console.log("Volume = " + Math.round(vol*10000)/10000 );
  }
}
let a = new cylinder();
a.CalVol();

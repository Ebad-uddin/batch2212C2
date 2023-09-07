// let Nokia1 = {
//     name : "3310",
//     type : "keypad",
//     color : "black"
// }
// let Nokia2 = {
//     name : "1100",
//     type : "keypad",
//     color : "black"
// }

// ES-5 Contructor Functions
// let table = document.getElementById('table');
// function Cellphones(make, model, color, price){
//     this.Make = make,
//     this.Model = model,
//     this.Color = color,
//     this.Price = price
//  }

// let Nokia1 = new Cellphones("Nokia", "1112", "black", "3400");
// let Nokia2 = new Cellphones("Nokia", "1118", "Blue", "4000");
// let Techno = new Cellphones("Camon19Neo", "45000", "Blue", "4000");
// Techno.camera = "48MP";
// Techno.youtube = "yes";
// for(let i in Techno){
//     document.write(i + " " + Techno[i] + "<br>");

// }


// Classes in js

// class CellPhones {
//     constructor(make, model, color, price ){
//         this.Make = make,
//         this.Model = model,
//         this.Color = color,
//         this.Price = price
//     }
//     msg(){
//         console.log("hello");
//     }
// }

// let nokia1 = new CellPhones("Nokia", "1112", "black", "3400")
// nokia1.msg();
// console.log(nokia1);

/* 
Object Oriented Programming (OOP)
inheritence
Abstraction
encapsulation
polymorphysm
*/



class Telephone{
    constructor(call_aati_hai, call_jati_Hai){
        this.incoming = call_aati_hai,
        this.outgoing = call_jati_Hai 
    }
    parent(){
        console.log("Mai abba hun");
    }
}

class Mobile extends Telephone{
    constructor(call_aati_hai, call_jati_hai, camera, wifi){        // child constructor
        super(call_aati_hai, call_jati_hai)     // parent constructor
        this.Camera = camera,
        this.Wifi = wifi
    }
    child(){
        console.log("Mai Bacha hun");
    }
}

let PTCL = new Telephone("callati hai", "call jati hai");
let cellphone = new Mobile("callati hai", "call jati hai", "camera supported", "wifi supported");
cellphone.child();
cellphone.parent();
// PTCL.child();
console.log(PTCL);
console.log(cellphone);
















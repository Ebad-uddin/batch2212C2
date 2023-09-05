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

class CellPhones {
    constructor(make, model, color, price ){
        this.Make = make,
        this.Model = model,
        this.Color = color,
        this.Price = price
    }
    msg(){
        console.log("hello");
    }
}

let nokia1 = new CellPhones("Nokia", "1112", "black", "3400")
nokia1.msg();
// console.log(nokia1);

















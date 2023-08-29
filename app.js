//  javascript object notation 

// let car = {
// model : 2022,
// name : "Honda",
// make : "civic",
// engincc : 1.8
// }
// // console.log(typeof car);

// // converting object into string
// let string = JSON.stringify(car);

// console.log(string);

// // set the data into localstorage
// localStorage.setItem("cardata", string);


// // getting the data from localstorage in the dataToObj variable
// let dataToObj = localStorage.getItem("cardata");

// // converting the json data into JsObject
// let obj = JSON.parse(dataToObj);
// console.log(obj.make);
// // document.write(obj.modification.upgradedEngine + "<br>" + obj.name + "<br>" + obj.model + "<br>" + obj.engincc);

// for(let i in obj){
   
//     document.write(i + obj[i]  + "<br>");
//     }


// overview of javascript

// var str = "Ebad";
// console.log(typeof str);       // EcmaScript-5 version
// var str = "Ebad";       // EcmaScript-5 version
// const age = 22;     // EcmaScript-6 version
// console.log(typeof age);       // EcmaScript-5 version
// let faculty = true;  // // EcmaScript-6 version
// faculty = false; // // EcmaScript-6 version
// console.log(typeof faculty);       // EcmaScript-5 version

// let name;
// console.log(typeof name);       // EcmaScript-5 version
// let school = null
// console.log(typeof school);       // EcmaScript-5 version



// // for(let i = 10; i >= 0; i--){
// //     console.log(i);
// // }

// // let a = 0;
// // while(a < 10){
// //     console.log(a);
// //     a++
// // }

// let b = 0;
// do{
//     console.log(b);
//     b++
// }
// while(b <= 10)



// function addition (a = 4 , b = 8){
//     // const a = 8;
//     // const b = 7;
//     let result = a + b;
//     document.write(result);
// }

// addition("ebad", "uddin");

// //  arrow function ES-6 

// let subt = (a , b) => {
// let result = a - b;
// document.write(result);
// }

// subt(4 , 2);

// let names = (fullname) => {return (fullname)};
// names("ahmed Ali")
// let x = names("ahmed Ali");
// console.log(x);


//  Arrays


let ar = ["apple",  "orange", "grapes", "banana"];

// for(let i = 0; i < 4; i++){
    //     document.write(ar[i] + "<br>");
    
    // }
    console.log(a.length);
    let i = 0;
    do{
    console.log(ar[i]);
    i++;
}
while(i < ar.length);
ar.forEach((value, index) => {
    document.write("<br>" + value  +  index);
})



let obj ={
    name : "ali",
    age : 44, 
    gender : "male",
    class : "firstyear"
}

for(let j in obj){
    console.log(obj[j]);
}


// synchronous behaviour
// Asynchronous behaviour
















































//  synchronous behaviour

// console.log("first statement");
// console.log("second statement");
// console.log("third statement");


// Asynchronous behaviour

// console.log("first statement");
// function getfullname(callback){
//     setTimeout(() => {
//         // console.log("second statement");
//         callback();
//     }, 3000);
    
// }
// console.log("second statement");
// function fullname(){
//     console.log("israr bhai");
// }
// getfullname(fullname)
// setInterval(() => {
//    document.write("after one sec");
// }, 1000);


// Promises

function prom(complete){
    return new Promise(function (resolve, reject){
if(complete){
    resolve("promise successful");
}
else{
    reject("promise rejected");
}
    })
}
// console.log(prom(true));
prom(false).then((response) => {console.log(response)}).catch(error => console.log(error));











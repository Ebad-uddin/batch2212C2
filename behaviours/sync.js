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

// function prom(complete){
//     return new Promise(function (resolve, reject){
// if(complete){
//     resolve("promise successful");
// }
// else{
//     reject("promise rejected");
// }
//     })
// }
// // console.log(prom(true));
// prom(false).then((response) => {console.log(response)}).catch(error => console.log(error));

fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.users);
    let cbody = document.getElementById("cbody");
    data.users.forEach((e) => {
      // document.write(e.id + "<br>" + "<h1>" + e.title  + "</h1>" + + "<br>" + e.description  + "<br>");

      cbody.innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-6" >
        <div class="card"">
    <img src="${
      e.image
    }" class="card-img-top" alt="..." width="100%" height="100%">
    <div class="card-body">
      <h5 class="card-title">${e.firstName + e.lastName}</h5>
      <p class="card-text">${e.email + e.gender}</p>
      <a href="#" class="btn btn-primary">${e.address.address}</a>
    </div>
  </div>
  </div>
    `;
    });
    // document.write(data)
  });

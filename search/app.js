
( async function(){

    let input = document.getElementById('input');
    let btn = document.getElementById('btn');
    console.log("Please wait");
 await fetch('https://dummyjson.com/products').then(response => response.json()).then(result => console.log(result));



function search(){
let query = input.value;
console.log(query);
}

btn.addEventListener('click', search)



}
)
()
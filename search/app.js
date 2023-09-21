
// Immediately invoke function
( async function(){
    let input = document.getElementById('input');
    let btn = document.getElementById('btn');
    let list = document.getElementById('mylist');
    console.log("Please wait");
 await fetch('https://dummyjson.com/products').then(response => response.json()).then(data => {
    console.log(data.products)
function displayData(result){
    list.innerHTML = "";
    result.forEach(e => {
        // console.log(e);
        
   list.innerHTML += `
   <li>${e.id}</li>
   <li>${e.title}</li>
   <li>${e.description}</li>
   <li>${e.category}</li>
   `
});
}
function search(){
let query = input.value;
// console.log(query);
let result = data.products.filter(function(product){
    return (product.title.toLowerCase().includes(query) || product.category.toLowerCase().includes(query)) 
})
console.log(result);
displayData(result)
}
btn.addEventListener('click', search)
});
}
)
()
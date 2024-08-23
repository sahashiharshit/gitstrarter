let mainheading = document.getElementById("main-heading");
let header = document.getElementById("header");
let basketheading = document.getElementById("basket-heading");
let thanks = document.getElementById("thanks");
mainheading.textContent ="Fruit World"
mainheading.style.color = "orange";
header.style.backgroundColor ="green";
header.style.borderBottom = " 3px solid orange";

basketheading.style.color="green";
thanks.innerHTML="<p>Please visit us again</p>";



const fruit = document.getElementsByClassName("fruit");
fruit[2].style.backgroundColor ="yellow";

for(let i=0;i<fruit.length;i++){
fruit[i].style.fontWeight="bold";
}

// //GetElementById

// let mainheading = document.getElementById("main-heading");
// let header = document.getElementById("header");
// let basketheading = document.getElementById("basket-heading");
// let thanks = document.getElementById("thanks");
// mainheading.textContent ="Fruit World"
// mainheading.style.color = "orange";
// header.style.backgroundColor ="green";
// header.style.borderBottom = " 3px solid orange";

// basketheading.style.color="green";
// thanks.innerHTML="<p>Please visit us again</p>";


// //GetElementsByClassName
// const fruit = document.getElementsByClassName("fruit");
// fruit[2].style.backgroundColor ="yellow";

// for(let i=0;i<fruit.length;i++){
// fruit[i].style.fontWeight="bold";
// }

// //GetElementsByTagName

// const litags = document.getElementsByTagName("li");
// litags[4].style.color="blue";
// for(let tags of litags){
//   tags.style.fontStyle="italic";
// }

// // QuerySelector and querySelectorAll

// const mainHeading = document.querySelector('#main-heading');
// mainHeading.style.textAlign='center';
// const fruits = document.querySelector('.fruits');
// fruits.style.backgroundColor='gray';
// fruits.style.padding='30px';
// fruits.style.margin='30px';
// fruits.style.width='50%';
// fruits.style.borderRadius='5px';
// fruits.style.listStyleType='none';

// const basketHeading= document.querySelector('h2');
// basketHeading.style.marginLeft='30px';
// const fruitItems =document.querySelectorAll('.fruit');
// for(let i=0;i<fruitItems.length;i++){
//     fruitItems[i].style.backgroundColor='white';
//     fruitItems[i].style.padding='10px';
//     fruitItems[i].style.margin='10px';
//     fruitItems[i].style.borderRadius='5px';
// }
// const OddFruitItems= document.querySelectorAll('.fruit:nth-child(odd)');
// for(let i=0;i<OddFruitItems.length;i++){
//     OddFruitItems[i].style.backgroundColor='lightgray';
// }


// const basketHeading2 = document.querySelector('#basket-heading');
// basketHeading2.style.color="brown";
// const fruit = document.querySelectorAll('.fruit');
// for(let i=1;i<=fruit.length;i=i+2){
//   fruit[i].style.backgroundColor="brown";
//   fruit[i].style.color="white";
// }

//createElement
const header = document.querySelector('#header');
const fruits = document.querySelector('.fruits');
const subheading = document.createElement('h3');
const para = document.createTextNode('Buy high quality organic fruits online');

subheading.appendChild(para);
subheading.style.fontStyle ="italic";

header.appendChild(subheading);

const divSelector = document.querySelectorAll('div');
const secondDiv = divSelector[1];

const ptag = document.createElement('p');
const ptagContent = document.createTextNode('Total fruits: 4');
ptag.appendChild(ptagContent);
ptag.id = "fruits-total";
secondDiv.appendChild(ptag);
secondDiv.insertBefore(ptag,fruits);
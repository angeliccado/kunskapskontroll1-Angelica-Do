// RESET BUTTON 
let btn = document.querySelectorAll('button');
let resetBtn = btn[0];
resetBtn.innerText = 'RESET'; 
// EVENT LISTENER - RESET BTN
resetBtn.addEventListener('click', resetAll);


//EVENTLISTENERS 

// Select and add EventListener - click on Article 3 Paragraph 
let coloredP = document.querySelector('.art-3 p');
coloredP.addEventListener('click', function (events){
colorPTag();
});

// Select and add EventListener on Art-1 background
let backgroundArt1 = document.querySelector('.art-1');
backgroundArt1.addEventListener('mouseenter', function (events){
changeBackgroundColor();
});

// Select and add EventListener on Art-2 Photo
let art2Photo = document.querySelector('.art-2 img');
art2Photo.addEventListener('click', function(event){
changePhoto();
});

//Select and add EventListener on Art2 Paragraph
let art2p = document.querySelector('.art-2 p');
art2p.addEventListener('click', function(event){
  changeText();
});

//Select and add EventListener on button two
let btns = document.querySelectorAll('button');
let colorBtn = btns[2];
colorBtn.addEventListener('mouseenter',function(event){
changeColorBtn();
});

// Select and add EventListener on Nav 
let logo = document.querySelector('.logo-random-class');
logo.addEventListener('click', function(event){
removeMenu();
});

// Select Cart and add event 
let cart = document.querySelector('.cart');
cart.addEventListener('click', function(alert){
alertCart();
});

// Create ul with Li-elements with border 
let list = document.querySelector('.footer');
list.insertAdjacentHTML('afterend','<ul>My List</ul>');

let listItem = document.createElement('li');
let listItemName = document.createTextNode('Item 1');
listItem.appendChild(listItemName);
document.querySelector('ul').appendChild(listItem);

let listItem2 = document.createElement('li');
let listItemName2 = document.createTextNode('Item 2');
listItem2.appendChild(listItemName2);
document.querySelector('ul').appendChild(listItem2);

let listItem3 = document.createElement('li');
let listItemName3 = document.createTextNode('Item 3');
listItem3.appendChild(listItemName3);
document.querySelector('ul').appendChild(listItem3);

//Style Ul/Li-elements 
let borderLi = document.querySelectorAll('li');
borderLi[0].style.border = '4px solid black';
borderLi[1].style.border = '4px solid red';
borderLi[2].style.border = '4px solid blue';

let borderUl = document.querySelector('ul');
borderUl.style.border = '6px solid purple';

// Select and add event on a 
let navigationA = document.querySelector('nav a');
navigationA.addEventListener('click',function(event){
strongNav();
});

// RESET FUNCTION 
function resetAll() {
// Change back the red p to black 
let pColored = document.querySelector('.art-3 p');
pColored.style.color = 'black';

// Reset the background Art-1 
let oldBackground = document.querySelector('.art-1');
oldBackground.style.backgroundColor = 'white';

// Reset to Red hoodie 
let oldPhoto = document.querySelector('.art-2 img');
oldPhoto.src = 'img/hoodie-fire.png';

// Reset text for Art-2 p 
let oldText = document.querySelector('.art-2 p');
oldText.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!';
// Reset art 3 button
let oldBtn = document.querySelector('.art-3 button');
oldBtn.style.backgroundColor ='black';
// Reset menu - Kommer plotta ut H3 vid varje klick på RESET 
let addMenu= document.querySelector('.footer a');
addMenu.insertAdjacentHTML('beforebegin', ' <h3>Menu</h3>');

// Remove UL 
let removeUl = document.querySelector('ul');
removeUl.remove();
}



/* FUNCTIONS */
// 1. Change color when click on Article 3's Paragraph 
function colorPTag(){
    let coloredP = document.querySelector('.art-3 p');
    coloredP.style.color = 'red';
    }

//2. Change background color for Art-1 to blue
function changeBackgroundColor(){ 
let newBackground = document.querySelector('.art-1');
newBackground.style.backgroundColor = 'blue';
}

//3. Change photo art-2 
function changePhoto(){
    let newPhoto = document.querySelector('.art-2 img');
    newPhoto.src = 'img/hoodie-forrest.png';
}
//4. Change text on art-2 p 
function changeText(){
let newText = document.querySelector('.art-2 p');
    newText.innerText = 'Trendig eldröd hoodie av bästa kvalité. Perfekt för kyliga höstdagar eller isiga vinterkvällar.';
}
//5. Change Color on button
function changeColorBtn (){
    let btn = document.querySelectorAll('button');
    let coloredBtn = btn[2];
coloredBtn.style.backgroundColor = 'red';
}

// 6. Remove menu heading in the footer
function removeMenu() {
    let menu = document.querySelector('.footer h3');
    menu.remove();
}
//7. Alert on cart
function alertCart(){
    let alertonCart = document.querySelector('.cart');
   alert('Hey, you are shopping to much!');
} 
// Underline Home in Nav
function strongNav(){
    let nav = document.querySelectorAll('nav a');
    let a = nav[0];
   a.style.textDecoration = 'underline';
}
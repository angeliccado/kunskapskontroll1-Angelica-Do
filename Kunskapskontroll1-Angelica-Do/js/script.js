// RESET BUTTON 
let btn = document.querySelectorAll('button');
let resetBtn = btn[0];
resetBtn.innerText = 'RESET'; 
// EVENT LISTENER - RESET BTN
resetBtn.addEventListener('click', resetAll);

// 1. Change color when click on Article 3 Paragraph 
let coloredP = document.querySelector('.art-3 p');
coloredP.addEventListener('click', function (events){
colorPTag();
});

// Change background color on an element
let backgroundArt1 = document.querySelector('.art-1');
backgroundArt1.addEventListener('mouseenter', function (events){
changeBackgroundColor();
});

// Change one photo
let art2Photo = document.querySelector('.art-2 img');
art2Photo.addEventListener('click', function(event){
changePhoto();
});

//Change text on one element 
let art2p = document.querySelector('.art-2 p');
art2p.addEventListener('click', function(event){
    
}
//Change color on button
// Remove one element
// Add a list with several Li-elements with border 







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
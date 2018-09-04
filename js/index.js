// Your code goes here

const textContent = Array.from(document.getElementsByClassName("text-content"));
const imgContent = document.querySelectorAll(".img-content img");

// console.log(textContent);
console.log(imgContent);
// console.log(imgContent[0].children[0].src)

window.addEventListener('keydown', (e) => {console.log(`key up property is "${e.key}", ${e.code}`)})
imgContent[1].addEventListener('mouseenter', (e) => {console.log(`mouse enter events are ${e.target} and ${e.relatedTarget}`)} )

imgContent[0].addEventListener('mouseover', autoChangeImg);


function autoChangeImg(){
    console.log("fired up")
    imgContent[0].src = "img/fun.jpg";
    imgContent[1].src = "img/adventure.jpg";
}



//Mouse over -> when you mouse over 

//Keydown -> Window event (Specific object based keydown, if 1 pressed then zoom, else 2 zoom out)

//Wheel -> swap images if front then forward, if back then backward - use arrays and img/array[i++ or --]

//Drag, get object picked and replace with object over then dropped




//dblClick - do an alertrQ AS


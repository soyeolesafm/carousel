// !            CALLING DOM ELEMENTS
// 1st step select the elements from the DOM
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const leftButton = document.querySelector('.carousel__button--left');
const rightButton = document.querySelector('.carousel__button--right')
const indNav = document.querySelector('.carousel__nav')
const indButtons = Array.from(indNav.children)

// use getBoundingClientRect to obtain the data 
// about width and other size and position messaurment 
const slideWidth = slides[0].getBoundingClientRect().width
// !                 POSITIONING SLIDES

// arrange slide position using only js
//* slides[0].style.left = slideWidth * 0 + 'px'
// *slides[1].style.left = slideWidth * 1 + 'px'
// *slides[2].style.left = slideWidth * 2 + 'px'
// !is better practice to loop the above coding 
// ----------------------CODE----------------------------------------------
const setSlidePosition = (slide , index) => {
    slide.style.left = slideWidth * index +'px' 
}
slides.forEach(setSlidePosition)
// ----------------------------ENDOFCODE------------------------------------
// ! it could also be code like this :
// *slides.forEach((slide , index) => {
// *slide.style.left = slideWidth * index + 'px'})
// but is better practice to do it this way so it doesn't get consfusing 

// ! ldebugger
console.log(slides[0]);

// 1st step select the elements from the DOM
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const leftButton = document.querySelector('.carousel__button--left');
const rightButton = document.querySelector('.carousel__button--right')
const indNav = document.querySelector('.carousel__nav')
const indButtons = Array.from(indNav.children)



// ldebugger
console.log(indButtons);

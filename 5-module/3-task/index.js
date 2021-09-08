function initCarousel() {
const inner = document.querySelector('.carousel__inner');
const slide = document.querySelector('.carousel__slide');
const slideWidth = slide.offsetWidth;
const nextButton = document.querySelector('.carousel__arrow_right');
const prevButton = document.querySelector('.carousel__arrow_left');
let transition = 0;
let currentSlide = 0;




nextButton.addEventListener('click', () => {
  transition -= slideWidth; 
  setTransition();
  if (currentSlide < 3) { 
    currentSlide++;
}
//console.log(currentSlide); логирование  

});

prevButton.addEventListener('click', () => {
  transition += slideWidth; 
  setTransition();
  if (currentSlide > 0) { 
    currentSlide--; 
  //console.log(currentSlide); логирование  
}
});

 setTransition = () => {
  inner.style.transform = `translateX(${transition}px)`;
};

сheckButtons = () => {
  if(currentSlide === 0){
    prevButton.style.display = 'none';
  }
  else if(currentSlide === 3){
    nextButton.style.display = 'none';
  }
};
сheckButtons();
}



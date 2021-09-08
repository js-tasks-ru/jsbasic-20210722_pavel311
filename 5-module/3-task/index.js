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
сheckButtons();
});

prevButton.addEventListener('click', () => {
  transition += slideWidth; 
  setTransition();
  if (currentSlide > 0) { 
    currentSlide--; 
}
сheckButtons();
});

 setTransition = () => {
  inner.style.transform = `translateX(${transition}px)`;
};

const сheckButtons = () => {
  if(currentSlide === 0){
    prevButton.style.display = 'none';
    console.log('aaaa');   
  }
  if(currentSlide != 0){
    prevButton.style.display = '';
      console.log(currentSlide);   
  }
  if(currentSlide === 3){
    nextButton.style.display = 'none';
    console.log('cccc');   

  }
  if(currentSlide != 3){
    nextButton.style.display = '';
    console.log(currentSlide);   
  }

};
сheckButtons();
}



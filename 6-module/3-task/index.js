import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
    this.addCard();
    this.initCarousel();
  }
  render(){
    this.elem = createElement(`
    <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
    </div>
    </div>
    `);
    for (let slide of this.slides){
    this.elem.querySelector('.carousel__inner').append(createElement(`
    <div class="carousel__slide" data-id="${slide.id}">
    <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
    <div class="carousel__caption">
      <span class="carousel__price">€${slide.price.toFixed(2)}></span>
      <div class="carousel__title">${slide.name}</div>
      <button type="button" class="carousel__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
  </div>
    `));
    }
  }
  addCard(){
    for(let button of this.elem.querySelectorAll('.carousel__button')){
    button.addEventListener('click', () => {
      
      let customEvent = new CustomEvent('product-add', { bubbles: true, detail: event.target.closest('.carousel__slide').dataset.id });
      //console.log(event.target.closest('.carousel__slide').dataset.id);
      this.elem.dispatchEvent(customEvent);
    });
    }
  }
  initCarousel() {
    const inner = this.elem.querySelector('.carousel__inner');
    const slide = this.elem.querySelector('.carousel__slide');
    const slides = this.elem.querySelectorAll('.carousel__slide');
    const nextButton = this.elem.querySelector('.carousel__arrow_right');
    const prevButton = this.elem.querySelector('.carousel__arrow_left');
    let transition = 0;
    let currentSlide = 0;
    
    
    nextButton.addEventListener('click', () => {
      transition -= slide.offsetWidth; 
      setTransition();
      if (currentSlide < slides.length) { 
        currentSlide++;
    }
    сheckButtons();
    });
    
    prevButton.addEventListener('click', () => {
      transition += slide.offsetWidth; 
      setTransition();
      if (currentSlide > 0) { 
        currentSlide--; 
    }
    сheckButtons();
    });
    
    const setTransition = () => {
      inner.style.transform = `translateX(${transition}px)`;
    };
    
    const сheckButtons = () => {
      if(currentSlide === 0){
        prevButton.style.display = 'none';
      }
      if(currentSlide != 0){
        prevButton.style.display = '';
      }
      if(currentSlide === (slides.length - 1)){
        nextButton.style.display = 'none';
    
      }
      if(currentSlide != (slides.length - 1)){
        nextButton.style.display = '';
      }
    };
    сheckButtons();
    }
    
    
    

}

import createElement from '../../assets/lib/create-element.js';


export default class StepSlider {
  constructor({ steps = 5, value = 0 }) {
   this.steps = steps;
   this.value = value;
   this.render();
   this.changeSteps();
   this.moveThumb();
  }
   render(){
    this.elem = createElement(`
    <!--Корневой элемент слайдера-->
    <div class="slider">
  
      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb">
        <span class="slider__value"></span>
      </div>
  
      <!--Заполненная часть слайдера-->
      <div class="slider__progress"></div>
  
      <!--Шаги слайдера-->
      <div class="slider__steps">
      </div>
      </div>
    
    </div>`);

      document.body.append(this.elem);

      for (let i = 0; i < this.steps; i++){
      let span = createElement(`<span ${i === this.value ? 'class="slider__step-active"' : ''}></span>`);
       this.elem.querySelector('.slider__steps').append(span); 
      }
      
      this.elem.querySelector('.slider__value').innerHTML = this.value;

      let segments = this.steps - 1;

      const left = (this.elem.offsetWidth / segments) * this.value;
      const leftRelative = left / this.elem.offsetWidth;
      const approximateValue = leftRelative * segments;
      this.value = Math.round(approximateValue);
      const valuePercents = this.value / segments * 100;
      const thumb = this.elem.querySelector('.slider__thumb');
      const progress = this.elem.querySelector('.slider__progress');

        thumb.style.left = `${valuePercents}%`;
        progress.style.width = `${valuePercents}%`;

  }
  
  changeSteps(){
    this.elem.addEventListener('click', (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
        let leftRelative = left / this.elem.offsetWidth;
        let segments = this.steps - 1;
        let approximateValue = leftRelative * segments;
        this.value = Math.round(approximateValue);
        let valuePercents = this.value / segments * 100;
        let thumb = this.elem.querySelector('.slider__thumb');
        let progress = this.elem.querySelector('.slider__progress');
        let sliderSteps = this.elem.querySelector('.slider__steps').children;


        this.elem.querySelector('.slider__step-active').classList.remove('slider__step-active');
        sliderSteps[this.value].classList.add('slider__step-active');
        this.elem.querySelector('.slider__value').innerHTML = this.value;
        
        thumb.style.left = `${valuePercents}%`;
        progress.style.width = `${valuePercents}%`;
    
        const sliderChange = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
        detail: this.value, // значение 0, 1, 2, 3, 4
        bubbles: true // событие всплывает - это понадобится в дальнейшем
      })
      this.elem.dispatchEvent(sliderChange);
    });
   }
  moveThumb(){
    let thumb = this.elem.querySelector('.slider__thumb');
    thumb.ondragstart = () => false;
    thumb.pointerdown = () => false;
    thumb.pointermove = () => false;
    
    thumb.addEventListener('pointerdown', () => {
      this.elem.classList.add('slider_dragging');
    let handleMove = (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth; 
      if (leftRelative < 0) {
        leftRelative = 0;
      }
      if (leftRelative > 1) {
        leftRelative = 1;
      }
      let leftPercents = leftRelative * 100;
      let progress = this.elem.querySelector('.slider__progress');
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      this.value = Math.round(approximateValue);
      let sliderSteps = this.elem.querySelector('.slider__steps').children;

      this.elem.querySelector('.slider__step-active').classList.remove('slider__step-active');
      sliderSteps[this.value].classList.add('slider__step-active');
      this.elem.querySelector('.slider__value').innerHTML = this.value;
      
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;    
    }
      document.addEventListener('pointermove', handleMove); 

        
      document.onpointerup = (event) => {
        document.removeEventListener('pointermove', handleMove);

        let left = event.clientX - this.elem.getBoundingClientRect().left;
        let leftRelative = left / this.elem.offsetWidth;
        let segments = this.steps - 1;
        let approximateValue = leftRelative * segments;
        this.value = Math.round(approximateValue);
        let valuePercents = this.value / segments * 100;
        let thumb = this.elem.querySelector('.slider__thumb');
        let progress = this.elem.querySelector('.slider__progress');
        let sliderSteps = this.elem.querySelector('.slider__steps').children;
    
        this.elem.querySelector('.slider__step-active').classList.remove('slider__step-active');
        sliderSteps[this.value].classList.add('slider__step-active');
        this.elem.querySelector('.slider__value').innerHTML = this.value;
        
        thumb.style.left = `${valuePercents}%`;
        progress.style.width = `${valuePercents}%`;

        this.elem.classList.remove('slider_dragging');

        document.onpointerup = null;
        const sliderChange = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
          detail: this.value, // значение 0, 1, 2, 3, 4
          bubbles: true // событие всплывает - это понадобится в дальнейшем
        })
        this.elem.dispatchEvent(sliderChange);
      

      }
        
      
    });
  }
  
}
import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.render();
  }

  render(){
    this.elem = createElement(`
    <div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
        <span class="card__price">"€ ${+(this.price.toFixed(2))}"</span>
    </div>
    <div class="card__body">
        <div class="card__title">"${this.name}"</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>
    `);
  }

  addCard(){
    document.querySelector('.card__button').addEventListener('click', () => {
      
      let customEvent = new CustomEvent('product-add', { bubbles: true, detail: this.product.id });
    
      this.elem.dispatchEvent(customEvent);
      
    });
  }
}






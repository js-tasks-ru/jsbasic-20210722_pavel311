import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.render();
  }
  render() {
    this.elem = createElement(
      `<div class="products-grid">
    <div class="products-grid__inner">
      <!--ВОТ ТУТ БУДУТ КАРТОЧКИ ТОВАРОВ-->
    </div>
  </div>`
  );
  for (const product of this.products){
    let card = new ProductCard(product);
    this.elem.querySelector('.products-grid__inner').append(card.elem);
    }
  }
  updateFilter(filters = {}){
   if (filters.hasOwnProperty('noNuts')){
     this.filters.noNuts = filters.noNuts;
   }
   if (filters.hasOwnProperty('vegeterianOnly')){
    this.filters.vegeterianOnly = filters.vegeterianOnly;
  }  
  if (filters.hasOwnProperty('maxSpiciness')){
    this.filters.maxSpiciness = filters.maxSpiciness;
  }
  if (filters.hasOwnProperty('category')){
    this.filters.category = filters.category;
} 
 const filteredProducts = this.products.filter((product) => {
    if(this.filters.noNuts && product.nuts) return false;
    if(this.filters.vegeterianOnly && !product.vegeterian) return false;
    if(Number.isInteger(this.filters.maxSpiciness) && (product.spiciness > this.filters.maxSpiciness)) return false;
    if(this.filters.category && this.filters.category !== product.category) return false;
    return true;
  });
  console.log(filteredProducts);
  this.elem.querySelector('.products-grid__inner').innerHTML = '';
  for (const product of filteredProducts){
    let card = new ProductCard(product);
    this.elem.querySelector('.products-grid__inner').append(card.elem);
  }
  }
}


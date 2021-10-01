import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = createElement(`
      <!--Корневой элемент Modal-->
      <div class="modal">
        <!--Прозрачная подложка перекрывающая интерфейс-->
        <div class="modal__overlay"></div>
  
        <div class="modal__inner">
          <div class="modal__header">
            <!--Кнопка закрытия модального окна-->
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
  
            <h3 class="modal__title">
            </h3>
          </div>
  
          <div class="modal__body">
          </div>
        </div>
  
      </div>
    </div>
    `);
  }
  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');

    this.elem.querySelector('.modal__close').addEventListener('click', () => {
      document.close();
      console.log('test');
    });
    let escape = this.elem.addEventListener('keydown', (event) => {
      if(event.code === 'Escape'){
      document.close();
      console.log('test');
      this.elem.removeEventListener('keydown', escape);
      }
    });
  }
  setTitle(modalTitle){
    this.elem.querySelector('.modal__title').append(modalTitle);
  }
  setBody(node){
    this.elem.querySelector('.modal__body').innerHTML = '';
  
    this.elem.querySelector('.modal__body').append(node.innerHTML);
  }
  close(){
      this.elem.innerHTML = null;
      document.body.classList.remove('is-modal-open');
  }
}

/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.querySelector('table');
    this.removeLine();
  }
     removeLine(){
      const buttons = this.elem.querySelectorAll('button');
      for (let button of buttons){
        button.addEventListener('click', () => {
          event.target.closest('tr').remove();
        });
      }
  }
      createRows(){
        
      }
}
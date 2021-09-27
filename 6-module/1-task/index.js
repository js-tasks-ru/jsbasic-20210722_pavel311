<<<<<<< HEAD

export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.querySelector('table');
    this.removeLine();
=======
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
     *      },
 *
 */
export default class UserTable {
  constructor(rows) {
>>>>>>> e52ead246d87ea03f60e047a0a4bfdd856e43c5e
    this.elem = document.createElement('table');

    this.elem.innerHTML = `
      <thead>
          <tr>
            <td>Имя</td>
            <td>Возраст</td>
            <td>Зарплата</td>
            <td>Город</td>
            <td></td>
          </tr>
      </thead>
    `;

    let tableInner = rows.map(row => {
      let cellsWithData = Object.values(row) // для каждого значения из объекта row
        .map(value => `<td>${value}</td>`) // обернуть его в <td>
        .join(''); // полученный массив <td>...</td> объединить в одну строку

      return `
          <tr>
            ${cellsWithData}
            <td><button>X</button></td>
          </tr>
        `; // возвращаем верстку одной строки
    }).join('');

    this.elem.innerHTML += `
      <tbody>
        ${tableInner}
      <tbody>
    `; // оборачиваем полученные строчки в tbody

    this.elem.addEventListener('click', (event) => this.onClick(event));
  }
<<<<<<< HEAD
     removeLine(){
      const buttons = this.elem.querySelectorAll('button');
      for (let button of buttons){
        button.addEventListener('click', () => {
          event.target.closest('tr').remove();
        });
      }
=======
>>>>>>> e52ead246d87ea03f60e047a0a4bfdd856e43c5e

  onClick(event) {
    if (event.target.tagName != 'BUTTON') {
      return;
    }

    let tr = event.target.closest('tr');

    tr.remove();
  }
<<<<<<< HEAD
      createRows(){

      }
} 

}
=======

}

>>>>>>> e52ead246d87ea03f60e047a0a4bfdd856e43c5e

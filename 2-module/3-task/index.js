
let calculator = {
  read() {
    this.a = +prompt('a');
    this.b = +prompt('b');
  },
  
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

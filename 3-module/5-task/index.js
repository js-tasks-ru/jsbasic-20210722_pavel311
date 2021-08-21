function getMinMax(str) {
  function getMinMax(str) {
    let array = str.split(' ');
    let min = array[0];
    let max = array[0];
    function func(item, i){
    if (+item){
      if(item < min){
        min = item;
      }
      if(item > max){
        max = item;
      }
    }
  }
    array.map(func);
  
    result = {
      min: array.min,
      max: array.max
    }
  }}

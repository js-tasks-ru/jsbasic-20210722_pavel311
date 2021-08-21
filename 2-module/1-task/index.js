function sumSalary(salaries) {
 let sum = 0;
 for (let key of Object.values(salaries)){
   if (Number.isInteger(key)){
     sum += key;
     }
   }
 return sum;
}
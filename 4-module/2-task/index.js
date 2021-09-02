function makeDiagonalRed(table) {
  rows = table.rows;
  for (let tr of rows){
    for(let td of tr.cells){
     let text = td.outerText;    
  if (text == '1:1' || text == '2:2' || text == '3:3' || text == '4:4' || text == '5:5'){
    td.style.backgroundColor = "red";
  }
   }
}
}


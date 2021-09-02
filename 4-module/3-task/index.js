function highlight(table) {
  for (let tr of table.rows){
    if (tr.cells[3].outerText != "Status"){
    if (!tr.cells[3].dataset.available){
      tr.hidden = 'true';
    }
      else {
        let className = (tr.cells[3].dataset.available === 'true') ? ' available' : ' unavailable';
        tr.className = tr.className + className;
      }
    }
    if(tr.cells[2].outerText == 'm'){
      tr.className = tr.className + ' male';
    }
    else if(tr.cells[2].outerText == 'f'){
      tr.className = tr.className + ' female';
    }
    if(tr.cells[1].outerText < 18){
      tr.style.textDecoration = "line-through";
    }
  
  }
  }
function toggleText() {
  let toggleButton = document.querySelector(`.toggle-text-button`);
  let text = document.querySelector('#text');

  toggleButton.addEventListener('click', () => {
    if (text.hidden == true){
      text.hidden = false;
    }
    else {
      text.hidden = true;
    }
  })
}
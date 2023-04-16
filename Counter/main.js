let value = 0;

const $value = document.querySelector('#value');
const $btns = document.querySelectorAll('.btn')

$btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const cls = event.target.classList;
    if (cls.contains("decrease")) {
      value--;
    }
    else if (cls.contains("increase")) {
      value++;
    }
    else {
      value = 0;
    }
    $value.textContent = value;
  })
})
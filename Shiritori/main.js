// const numberOfPlayer = Number(prompt("몇 명이 참여할 건가요?"));
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order')
let jesiWord; // 초기값 undefined
let inputtedWord; // 게임 참가자가 입력한 단어 저장

$input.focus();

$button.addEventListener('click', () => { // 이벤트에 등록
  // console.log("버튼 누름")
  if (!jesiWord) { // 최초 실행시 !undefined 제시어가 비어있다
    // 입력한 단어를 제시어로 저장한 후 화면에 표시

    jesiWord = inputtedWord;
    $word.textContent = inputtedWord;
    $input.value = '';

    // const order = parseInt($order.innerText);
    // if(order+1 > numberOfPlayer) {
    //   $oreder.innerText = 1;
    // }
    // else {
    //   $oreder.innerText = order+1;
    // }

    let order = Number($order.innerHTML);
    $order.innerHTML = (order++)%numberOfPlayer+1;

    $input.value = '';

  }
  else { // 제시어가 비어있지 않다
    if (jesiWord[jesiWord.length -1] === inputtedWord[0]) {
      // 입력단어가 올바름
      alert('올바름');
      jesiWord = inputtedWord;
      $word.textContent = inputtedWord;
      
      let order = Number($order.innerHTML);
      $order.innerHTML = (order++)%numberOfPlayer+1;

      $input.value = '';
      $input.focus();

    }
    else {
      // 입력단어가 틀림
      alert('틀림')

      $input.value = '';
      $input.focus();
    }
  }
})

$input.addEventListener('input', (event) => {
  // console.log(`입력한 값 : ${event.target.value}`)
  inputtedWord = event.target.value;
})
$input.addEventListener('keyup', (event) => {
  if(event.keyCode === 13) {
    $button.click();
  }
})
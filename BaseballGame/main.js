const $input = document.querySelector('#input')
const $form = document.querySelector('#form')
const $logs = document.querySelector('#logs')
const $rdmBtn = document.querySelector('#rdmBtn')

// const rNum = []

// const getRandomNumber = () => {
//   while (rNum.length < 4) {
//     const randomNum = Math.floor(Math.random() * 9) + 1
//     if (rNum.includes(randomNum)) {
//       continue
//     }
//     rNum.push(randomNum)
//   }
// }

// $rdmBtn.addEventListener('click', () => {
//   rNum.length = 0
//   getRandomNumber()
//   console.log(rNum);
// })

const numbers = Array(9).fill().map((v, i) => i+1); // 1~9 값을 가지는 배열 생성
const answer = [];

const getRNum = (m, n) => Math.floor(Math.random() * (n-m+1)); // 랜덤값

for (let n = 0; n < 4; n++) { // 정답 랜덤 4개 생성
  const index = getRNum(0, numbers.length - 1);
  answer.push(numbers[index]);
  numbers.splice(index, 1); // 배열에서 index위치에 1개를 삭제
}

console.log(answer)

const tryArr = []; // 시도한 입력값 저장

const checkInput = (input) => { // 문자열 input
  if(input.length !== 4) { // 4개값을 입력안한 경우
    return alert('재시도 4자리 숫자로 입력');
  }
  if ((new Set(input)).size !== 4) { // 4개의 숫자중에 중복된 숫자가 있는 경우
    return alert('중복금지');
  }
  if(tryArr.includes(input)) { // 이미 시도한 입력 체크
    return alert("이미 시도한 값");
  }
  return true;
}

$form.addEventListener('submit',  /* enter 키 눌러 요청 처리 가능 */ (event) => {
  event.preventDefault(); // 디폴트 처리를 중지
  // submit의 디폴트 처리: action속성의 주소로 요청을 처리하고 화면 새로고침 = 화면 초기화
  const value = $input.value;
  $input.value = '';
  const valid = checkInput(value);
  // console.log(valid);
  if(!valid) return; // 값이 올바르지 않으면 리턴

  if(answer.join('') === value) {
    $logs.textContent = '홈런';
    return;
  }
  if(tryArr.length > 10) {
    const msg = document.createTextNode(`패배: 정답 ${answer.join('')}`);
    $logs.appendChild(msg); // 중요지식
    return;
  }
  
  let nOfStrike = 0;
  let nOfBall = 0;

  /* for (let i = 0; i < value.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) { // indexOf() 못찾으면 -1 반환, 찾으면 해당하는 index번호값 반환
      if (index === i) {
        nOfStrike++;
      } else {
        nOfBall++;
      }
    }
  } */

  answer.forEach((answerValue, answerIndex) => {
    const index = value.indexOf(String(answer[answerIndex]));
    // String(): 문자열 객체를 생성하는 함수
    // Number(): 숫자 객체를 생성하는 함수
    // Date(), Array() ...
    if (index > -1) { // indexOf() 못찾으면 -1 반환, 찾으면 해당하는 index번호값 반환
      if (index === answerIndex) {
        nOfStrike++;
      } else {
        nOfBall++;
      }
    }
  })

  $logs.append(`${value}: ${nOfStrike} 스트라이크 ${nOfBall} 볼`, document.createElement('br'));
})
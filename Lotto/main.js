const candidate = Array(45).fill().map((v, i) => i + 1);
const getRNum = (m, n) => Math.floor(Math.random() * (n-m+1));

const shuffle = [];
while(candidate.length > 0 ) { // 피셔-에이츠 셔플 알고리즘
  const random = getRNum(0, candidate.length - 1);
  const spliceArrValue = candidate.splice(random, 1);
  console.log(spliceArrValue);
  const value = spliceArrValue[0];
  shuffle.push(value);
}

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];

const $result = document.querySelector('#result');
const $btn = document.querySelector('.btn');

// 콜백함수


for (let i = 0; i < 6; i++) { // let 블럭내에서만 사용 가능
  setTimeout(() => {
    const $ball = document.createElement('div'); // div 태그 생성
    $ball.className = 'ball'; // div 태그에 class 이름 부여
    $ball.textContent = winBalls[i]; // div 태그에 텍스트 부여
    $result.appendChild($ball); // div 태그를 result 태그에 추가
  }, 1000 * (i + 1));
}

const $bonus = document.querySelector('#bonus');
setTimeout(() => {
  const $bonusBall = document.createElement('div');
  $bonusBall.className = 'ball';
  $bonusBall.textContent = bonus;
  $bonus.appendChild($bonusBall);
}, 7000);
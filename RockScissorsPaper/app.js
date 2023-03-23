

const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'CONPUTER_WINS';

let gameIsRunning = false;


const getPlayerChoice = () => {
  // selection에 입력한 값을 대문자로 바꿔서 주기
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toLocaleUpperCase();
  if(
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
    ) {
      // 입력한 값이 ROCK, PAPER, SCISSORS 가 아니면 기본 값 ROCK 주기
      alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`)
      return;
    }
    return selection;
}

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}



// 화살표 함수 사용
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
  cChoice === pChoice 
    ? RESULT_DRAW 
    : cChoice === PAPER && pChoice === SCISSORS ||
      cChoice === SCISSORS && pChoice === ROCK ||
      cChoice === ROCK && pChoice === PAPER 
    ? RESULT_PLAYER_WINS 
    : RESULT_COMPUTER_WINS;

  /* if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if(
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK ||
    cChoice === ROCK && pChoice === PAPER
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  } */


startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is running');
  const playerChoice = getPlayerChoice();
  const computChoice = getComputerChoice();
  
  let winner;
  if (playerChoice) {
    winner = getWinner(computChoice, playerChoice);
  } else {
    winner = getWinner(computChoice);
  }

  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computChoice}, therefore you `

  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.'
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won'
  } else {
    message = message + 'lost'
  }

  alert(message);
  gameIsRunning = false;
});


// rest operator
const combine = (resultHandler, operation, ...numbers) => {
  // 함수 안에 함수
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  }

  let sum = 0;
  for(const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
      }
  } 
  resultHandler(sum, 'The result after adding all number is');
};


// const subtractUp = function() {
//   let sum = 0;
//   for(const num of arguments /*Rest 나오기 전에 사용 function을 사용해야함함*/) {
//     sum += num;
//   }
//   return sum;
// };

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result)
}

combine(
  showResult.bind(this, 'The result after adding all numbers is:'),
  'ADD',
  1,
  5,
  'fdsa',
  -3,
  6,
  10
);
combine(
  showResult.bind(this, 'The result after adding all numbers is:'),
  'ADD',
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
combine(
  showResult.bind(this, 'The result after subtracting all numbers is:'),
  'SUBTRACT',
  1,
  10,
  15,
  20
);


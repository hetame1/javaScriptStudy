let numOne = '';
let operator = '';
let numTwo = '';
let result;

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
const $run = document.querySelector('#run')

const onClickNum = (numStr) => () => {
  if(numOne == result && numTwo) {
    onClickOperator('C')
  }
  else if (numOne) {
    numTwo += numStr
    $result.value = numTwo
  }
  else {
    $result.value += numStr;
  }
}

const onClickOperator = (opt) => () => {
  if(numOne == '') {
    numOne = $result.value
    operator = ''
  }
  $result.value = ''
  $operator.value = opt;
  operator = opt;
  $run.value = `${numOne} ${operator}`
  if (numTwo) {
    numTwo = ''
  }
  if (opt == 'C') {
    numOne = ''
    numTwo = ''
    operator = ''
    $result.value = ''
    $operator.value = ''
    $run.value = ''
  }
}

document.querySelector('#calculate').addEventListener('click', () => {
  switch (operator) {
    case '+':
      $run.value = `${numOne} ${operator} ${numTwo} =`
      result = parseFloat(numOne) + parseFloat(numTwo) 
      $result.value = result
      numOne = parseInt(result)
      break;
    case '-':
      $run.value = `${numOne} ${operator} ${numTwo} =`
      result = parseFloat(numOne) - parseFloat(numTwo)
      $result.value = result
      numOne = parseInt(result)
      break;
    case '/':
      $run.value = `${numOne} ${operator} ${numTwo} =`
      result = parseFloat(numOne) / parseFloat(numTwo)
      $result.value = result
      numOne = parseInt(result)
      break;
    case '*':
      $run.value = `${numOne} ${operator} ${numTwo} =`
      result = parseFloat(numOne) * parseFloat(numTwo)
      $result.value = result
      numOne = parseInt(result)
      break;
  }
})

document.querySelector('#num-0').addEventListener('click', onClickNum(0))
document.querySelector('#num-1').addEventListener('click', onClickNum(1))
document.querySelector('#num-2').addEventListener('click', onClickNum(2))
document.querySelector('#num-3').addEventListener('click', onClickNum(3))
document.querySelector('#num-4').addEventListener('click', onClickNum(4))
document.querySelector('#num-5').addEventListener('click', onClickNum(5))
document.querySelector('#num-6').addEventListener('click', onClickNum(6))
document.querySelector('#num-7').addEventListener('click', onClickNum(7))
document.querySelector('#num-8').addEventListener('click', onClickNum(8))
document.querySelector('#num-9').addEventListener('click', onClickNum(9))
document.querySelector('#plus').addEventListener('click', onClickOperator("+"))
document.querySelector('#clear').addEventListener('click', onClickOperator('C'))
document.querySelector('#minus').addEventListener('click', onClickOperator('-'))
document.querySelector('#divide').addEventListener('click', onClickOperator('/'))
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'))





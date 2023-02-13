## 자료형

String (문자 데이터)

따옴표를 사용

```jsx
let myName = "HEROPY";
let email = 'poi8946@naver.com';
let hello= `hello ${myName}?!`
```

Number (숫자 데이터)

정수 및 부동소수점 숫자를 나타냅니다

```jsx
let number = 123;
let oopacity = 1.57;
```

Boolean (불린 데이터)

true, false 두 가지 값밖에 없는 논리 데이터

```jsx
let checked = true;
let isShow = false;
```

Undefined

값이 할당되지 않은 상태를 나타냅니다

```jsx
let undef;
let obj = {abc: 123};
```

Null

어떤 값이 의도적으로 비어있음을 의미합니다

```jsx
let empty = null;
```

Object (객체 데이터)

여러 데이터를 Key:Value 형태로 저장합니다

```jsx
let user = {
	// Key: value,
	name: 'HEROPY',
	age: 85,
	isValid: true
}

console.log(user.name); // HEROPY
console.log(user.age); // 85
console.log(user.isValid); // true
```

Array (배열 데이터)

여러 데이터를 순차적으로 저장합니다. [ ]

```jsx
let fruits = [’Apple’, ‘Banana’, ‘Cherry’];

console.log(fruits[0]); // 'Apple'
```

## 변수

데이터를 저장하고 참조(사용)하는 데이터의 이름

var, let, const

```jsx
let a = 2;
let b = 5;

 console.log(a + b); // 7
```

```jsx
const a = 12;

a = 999;
console.log(a); // TypeError
```

let은 재할당 가능 const는 재할당 불가능

## 예약어

**특별한 의미**를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어

Reserved Word

```jsx
let this = 'Hello!'; // SyntaxError
let if = 123; // SyntaxError
let break = true; // SyntaxError
```

## 함수

**특정 동작**(기능)을 수행하는 일부 코드의 집합(부분)

**function**

```jsx
function heloFunc() {
	// 실행 코드
	console.log(1234);
}

// 함수 호출
helloFunc(); // 1234
```

```jsx
function returnFunc() {
	return 123;
}

let a = returnFunc();

console.log(a); // 123
```

```jsx
// 함수 선언
function sum(a, b) { // a와 b는 매개변수(Parameters)
	return a + b;
}

let a = sum(1, 2); // 1과 2는 인수(Arguments)
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a, b, c); // 3, 19, 6
```

```jsx
// 기명(이름이 있는) 함수
// 함수 선언
function hello() {
	console.log('hello');
}

// 익명(이름이 없는) 함수
// 함수 표현
let world = function () {
	console.log('World');
}

hello(); // hello
world(); // World
```

```jsx
const heropy = {
	name: 'HEROPY',
	age: 85,
	getName: function () {
		return this.name;
	}
};

const hisName = heropy.getName();
console.log(hisName); // HEROPY

console.log(heropy.getName()); //HEROPY
	
```

## 조건문

조건의 결과(truthy, falsy)에 따라 다른 코드를 싱행하는 구문

if, else

```jsx
let isShow = true;
let checked = false;

if(isShow) {
	console.log('Show'); // Show
}

if(checked) {
	console.log('Checked');
}
```

## 화살표 함수

```jsx
const double = function (x) {
	return x * 2
}
console.log('double: ', double(7))

const doubleArrow = (x) => {
	return x * 2
}
=>축약
const doubleArrow = x => x * 2

const doubleArrow = ({ name: 'Heropy' })

console.log('double: ', doubleArrow(7))
```

## 즉시 실행 함수  (IIFE)

```jsx
const a = 7
function double() {
	console.log(a * 2)
}
double(); // 14

(function () {
	console.log(a * 2)
}()) // 즉시 실행 함수
```

## 호이스팅

함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

```jsx
const a = 7

double() // 14

function double() {
	console.log(a * 2)
}

```

## 콜백

함수의 인수로 사용되는 함수

```jsx
function timeout(callback) {
	setTimeout(() => {
		console.log('Heropy!')
		callback()
	}, 3000)
}

timeout(() => {
	console.log('Done!')
})

```
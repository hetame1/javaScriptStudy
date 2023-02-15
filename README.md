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

# JS 데이터

## 문자

**`indexOf()`**

String.prototype.indexOf()
메서드는 호출한 `[String]` 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환

```jsx
const str = 'Hello world!'.indexOf('world')
console.log(str) // 6

const str = 'Hello world!'.indexOf('HEROPY')
console.log(str) // -1

const str = 'Hello world!'
console.log(str.indexOf('HEROPY') !== -1) // false
```

**`length`**
 속성은 UTF-16 코드 유닛을 기준으로 문자열의 길이를 나타냅니다.

```jsx
const str = '1234'
console.log(str.length) // 4
```

**`slice()`**
 메소드는 문자열의 일부를 추출하면서 새로운 문자열을 반환합니다.

 두번째 매개변수인 endIndex는 그 직전까지만 추출 만약 3을 입력하면 0, 1, 2를 추출

```jsx
const str = 'Hello world!'
console.log(str.slice(0, 3) // Hel
```

**`replace()`**
 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환합니다.

```jsx
const str = 'Hello world!'
console.log(str.replace('world', 'HEROPY')) // Hello HEROPY!

console.log(str.replace(' world!', '')) // Hello
```

**`match()`**
 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다.

```jsx
const str = 'poi8946@naver.com'
console.log(str.match(/.+(?=@)/)[0]) // poi8946 
					  정규표현식
```

**`trim()`**
메서드는 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환합니    다

```jsx
const str = '     Hello world     '
console.log(str.trim()) // Hello world
```


## 숫자

```jsx
const pi = 3.14159265358979
console.log(pi) // 3.14159265358979

const str = pi.toFixed(2)
console.log(str) // 3.14
console.log(typeof str) // string

const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer) // 3
console.log(float) // 3.14
console.log(typeof integer, typeof float) // number number
```


### Math

**`Math`**
 수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체입니다. 함수 객체가 아닙니다.

```jsx
console.log('abs: ', Math.abs(-12)) // abs: 12
Math.abs() 함수는 주어진 숫자의 절대값을 반환합니다.

console.log('min: ', Math.min(2, 8)) // 2
Math.min() 함수는 주어진 숫자들 중 가장 작은 값을 반환합니다.

console.log('max: ', Math.max(2, 8)) // 8
Math.max() 함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환합니다.

console.log('ceil: ', Math.ceil(3.14)) // 4
Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다.

console.log('floor: ', Math.floor(3.14)) // 3
Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.

console.log('round: ', Math.round(3.14 )) // 3
Math.round() 함수는 입력값을 반올림한 수와 가장 가까운 정수 값을 반환합니다.

console.log('random :', Math.random()) // 0.0681598325982
Math.random() 함수는 0 이상 1 미만의 구간에서 근사적으로 균일한 부동소숫점 의사난수를 반환
```


## 배열

```jsx
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers[1]) // 2
console.log(fruits[2]) // Cherry
```

**`find()`**
메서드는 주어진 판별 함수를 만족하는 **첫 번째 요소**의 **값**을 반환합니다. 

그런 요소가 없다면 `[undefined]`를 반환합니다.

```jsx
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);

console.log(found); // 12
```

 **`length`**

속성은 배열의 길이를 반환합니다.

```jsx
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const.log(numbers.length) // 4
const log(fruits.length) // 3
console.log([1, 2]).length) // 2
```

**`concat()`**
 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.

```jsx
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers.concat(fruits)) // [1, 2, 3, 4, 'Apple', 'Banana', 'Cherry']
// 원본 데이터 손상 X
```

**`forEach()`**
 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.

```jsx
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

fruits.forEach(function (element, index, array) {
	console.log(elements, index, array) // Apple 0 ['Apple', 'Banana', 'Cherry'], 
										// Banana 1 ['Apple', 'Banana', 'Cherry'],
										// Cherry 2 ['Apple', 'Banana', 'Cherry']
})
```

**`map()`**
메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 **새로운 배열을 반환**합니다.

```jsx
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const b = fruits.map((fruit, index) => `${fruit}-${index}`)
console.log(b) // ["Apple-0", "Banana-1", "Cherry-2"]

const b = fruits.map((fruit, index) => ({
		id: index,
		name: fruit
	}))
console.log(b) // [{id: 0, name: "Apple"}, {id: 1, name: "Banana"}, {id: 2, name: "Cherry"}]
```

**`filter()`**
 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

```jsx
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.map(number => number < 3)
console.log(a) // [true, true, false, false]

const b = numbers.filter(number => number < 3)
console.log(b) [1, 2] 
```

**`find()`**
메서드는 주어진 판별 함수를 만족하는 **첫 번째 요소**의 **값**을 반환합니다. 

그런 요소가 없다면 `[undefined]'를 반환합니다.

**`findIndex()`**
메서드는 **주어진 판별 함수를 만족하는** 배열의 첫 번째 요소에 대한 **인덱스**를 반환합니다. 

만족하는 요소가 없으면 -1을 반환합니다.

```jsx
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = fruits.find(fruit => /^B/.test(fruit))
console.log(a) // Banana

const b = fruits.findIndex(fruit => /^B/.test(fruit))
console.log(a) // 1
```

**`includes()`**
 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.

```jsx
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.includes(3)
console.log(a) // true

const b = fruits.includes('HEROPY')
console.log(b) // false
```

**`push()`**
 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.

**원본이 수정됨**

**`unshift()`**
 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.

**원본이 수정됨**

```jsx
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.push(5)
console.log(a) // [1, 2, 3, 4, 5]

numbers.unshift(0)
console.log(numbers) // [0, 1, 2, 3, 4, 5, 6]
```

**`reverse()`**
메서드는 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.

**원본이 수정됨**

```jsx
const numbers = [1, 2, 3, 4]

numbers.reverse()
console.log(numbers) // [4, 3, 2, 1]
```

**`splice()`**
메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.

**원본이 수정됨**

```jsx
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.splice(2, 1)
console.log(numbers) // [1, 2, 4]
```


## 객체

**`Object.assign()`**
메서드는 출처 객체들의 모든 [열거 가능]을 **복사**해 대상 객체에 붙여넣습니다. 

그 후 대상 객체를 반환합니다.

정적메서드 (Static method)

```jsx
const userAge = {
  name: 'Heropy',
  age: 85
}
const userEmail = {
  name: 'Heropy',
  email: 'thesecon@gmail.com'
}

const target = Object.assign({}(// 원본에 영향 안주고 새로운 객체를 만듬), userAge, userEmail)
console.log(target) // {name: "Heropy", age: 85, email: "thesecon@gmail.com"}
console.log(userAge) // {name: "Heropy", age: 85, email: "thesecon@gmail.com"}
console.log(target === userAge) // true

const a = { k:123 }
const b = { k:123 }
console.log(a === b) // false
```

**`Object.keys()`**
메소드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.

```jsx
const user = {
  name: 'Heropy',
  age: 85,
	email: 'thesecon@gmail.com'
}

const keys = Object.keys(user)
console.log(keys)
// ['name', 'age', 'email']

console.log(user['email']) // thesecon@gmail.com

const values = keys.map(key => user[key])
console.log(values) // ['Heropy', 85, 'thesecon@gmail.com']
```


## 구조 분해 할당 ( 비구조화 할당 )

**구조 분해 할당** 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.

```jsx
const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com'
}

const {name, age, email} = user

console.log(name) // Heropy
```


## 전개 연산자

배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있습니다.

```jsx
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits) // ['Apple', 'Banana', 'Cherry']
console.log(...fruits) 'Apple', 'Banana', 'Cherry'

function toObject(a, b, c) {
	return {
		a: a,
		b: b,
        c: c
	}
}
console.log(toObject(...fruits)) // {a: 'Apple', b:'Banana', c:'Cherry'}

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
function toObject(a, b, ...c(rest parameter)) {
	return {
		a: a,
		b: b,
        c: c
	}
} >> 축약
const toObject = (a, b, ...c) => ({ a, b, c })
console.log(toObject(...fruits)) // {a: 'Apple', b:'Banana', c:['Cherry', 'Orange'}
```


## 데이터 불변성(Immutability)

원시 데이터: String, Number, Boolean, undefined, null

참조형 데이터: Object, Array, Function

```jsx
let a = 1
let b = 4
console.log(a, b, a === b) // 1 4 false
b = a
console.log(a, b, a === b) // 1 1 true
a = 7
console.log(a, b, a === b) // 7 1 false
let c = 1
console.log(b, c, b === c) // 1 1 true

let a = { k: 1 }
let b = { k: 1 }
console.log(a, b, a === b) // {k:1} {k:1} false
a.k = 7
b = a
console.log(a, b, a === b) // {k:7} {k:7} true
a.k = 2
console.log(a, b, a === b) // {k:2} {k:2} true
let c = b
console.log(a, b, c, a === c) // {k:2} {k:2} {k:2} true
a. k = 9
console.log(a, b, c, a === c) // {k:9} {k:9} {k:9} true
```


### 얕은 복사, 깊은 복사

```jsx
const user = {
	name: Heropy,
	age: 85,
	emails: [poi8946@naver.com]

}

const copyUser = Onject.assign({}, user) // 얕은 복사
							  {...user}							
console.log(copyUser === user) // true

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

---------------------------------------------

user.emails.push('poi8946@naver.com')
console.log(user.emails === copyUser.emaills)

import _ from 'lodash'
const copyUser = _.cloneDeep(user)

참조 데이터 안에 참조 데이터가 또 있으면 깊은 복사를 하는게 좋음
```


## 가져오기, 내보내기

default export (기본 통로) 는 이름을 굳이 안 정해줘도 된다

하나의 데이터만 내보낼수 있음

```jsx
export default function () {
}
```

named export 를 이용하면 {}를 이용해 import 해야한다

여러개 내보내기 가능

```jsx
export function name() {
}

export const user = {
}

// import { name, user as heropy ( 이름 변경 가능) } from

// import * as R from 

```

# Lodash

****`_.uniq(array)`****

각 요소의 첫 번째 항목만 유지되는 중복 없는 버전의 배열을 만듭니다.

```jsx
_.uniq([2, 1, 2]);
// => [2, 1]
```

```jsx
import _ from 'lodash'

const usersA = [
	{ userId: '1', name: 'HEROPY' },
	{ userId: '2', name: 'Neo' }
]

const usersB = [
	{ userId: '1', name: 'HEROPY' },
	{ userId: '3', name: 'Amy' }
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC) // 0:	{ userId: '1', name: 'HEROPY' },
							  // 1: { userId: '2', name: 'Neo' },
							  // 2: { userId: '1', name: 'HEROPY' },
							  // 3: { userId: '3', name: 'Amy' }

console.log('uniqBy', _.uniqBy(usersC, 'userId')) // 0:	{ userId: '1', name: 'HEROPY' },
												  // 1: { userId: '2', name: 'Neo' },
												  // 2: { userId: '3', name: 'Amy' }

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD) // 0: { userId: '1', name: 'HEROPY' },
							   // 1: { userId: '2', name: 'Neo' },
							   // 2: { userId: '3', name: 'Amy' }
```

```jsx
import _ from 'lodash'

const users = [
	{ userId: '1', name: 'HEROPY' },
	{ userId: '2', name: 'Neo' },
	{ userId: '3', name: 'Amy' },
	{ userId: '4', name: 'Evan' },
	{ userId: '5', name: 'Lewis' }
]

const foundUser = _.find(users, { name: 'Amy' })
const foundUserIndex = _.findIndex(users, { name: 'Amy' })
console.log(foundUser) // {userId: "3", name:"Amy"}
console.log(foundUserIndex) // 2

_.remove(users, { name: 'HEROPY' })
console.log(users) // { userId: '2', name: 'Neo' },
				   // { userId: '3', name: 'Amy' },
				   // { userId: '4', name: 'Evan' },
				   // { userId: '5', name: 'Lewis' }
```

# JSON

**JSON(** JavaScript Object Notation )은 [속성-값 쌍], 배열 자료형(array data types) 또는 기타 모든 시리얼화 가능한 값(serializable value) 또는 "키-값 쌍"으로 이루어진 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷이다.

```jsx
import myData from './myData.json'

const user = {
	name: 'HEROPY',
	age: 85,
	emalis: [
		'poi8946@naver.com',
		'hetame@naver.com'
	]
}
console.log('user', user)

const str = JOSN.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)
```

```jsx
{
  "string": "HEROPY",
  "number": 123,
  "boolean": true,
  "null": null,
  "object": {},
  "array": []
}
```

JSON 파일은 하나의 문자데이터

# Local Storage

`localStorage`는 `[sessionStorage]`와 비슷하지만, 

`localStorage`의 데이터는 만료되지 않고 `sessionStorage`의 데이터는 

페이지 세션이 끝날 때, 즉 페이지를 닫을 때 사라지는 점이 다릅니다.

```jsx
const user = {
	name: 'HEROPY',
	age: 85,
	emalis: [
		'poi8946@naver.com',
		'hetame@naver.com'
	]
}

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))
```

# OMDb API


## Query String

어떤 문자를 가지고 검색을 한다

**주소?속성=값&속성=값&속성=값**

```jsx
import axios from "axios";

function fetchMovies() {
	axios.get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
	.then(res => {
		console.log(res)
		const h1El = document.querySelector('h1')
		const imgEl = document.querySelector('img')
		h1El.textContent = res.data.Search[0].Title
		imgEl.src = res.data.Search[0].poster
	})
}

fetchMovies()
```
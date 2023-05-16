# DOM

The Document Object Model

웹페이지에서는 기본 html 코드를 웹페이지에서 다운로드해서

이걸 분석하고 렌더링함

자바스크립트는 호스트된 언어

브라우저가 자바스크립트를 실행할 환경을 제공해줌

브라우저가 기능을 노출해서 자바스크립트가 렌더링 된 HTML 코드와 상호작용하게 되며

이걸 DOM이라고 함

DOM은 결국 로드 및 렌더링 된 HTML 코드

로드된 html 코드에 엑세스가 가능해짐

### 문서와 윈도우 객체

문서는 부라우저가 노출시키는 루트 DOM

렌더링 된 모드 html에 접근하기 위한 최고점의 엔트리 포인트

창은 자바스크립트의 브라우저에서 사용 가능한 최상위의 전역 객체

활성화된 브라우저 창이나 탭을 보여줌

### DOM과 생성 방식 이해하기

console.dir() 상세한 내용 표시

$0 은 항상 “Elements”탭에서 마지막으로 선택한 요소에 대한 액세스를 제공

( 크롬 개발 도구 기능 )

### DOM 쿼리하기

가장 중요한 **querySelector** 와 **getElementByID**가 있음
- 한 번에 하나의 요소를 선택함 (단일 요소에 엑세스)
- querySelector는 CSS 선택자를 사용함 ( 복잡한 쿼리가 있는 요소를 선택할 때 큰 탄력성과 성능 제공 ) / 맨 처음 일치하는 요소로 액세스
- getElementByID는 html요소에 할당되었을 ID를 가지고 요소를 선택 ( 단일 요소에 엑세스 )
- 따라서 발결한 DOM 요소에 대한 직접적인 참조를 제공

또 다른 메서드로는 **querySelectorAll** 과 **getElementsByTagName**이 있음
- 다중 요소를 선택
- querySelectorAll은 CSS 선택자를 사용함 ( 가장 유연한 메서드 ) // 정적 노드리스트 반환
- getElementsByTagName은 html요소에 할당된 태그 이름을 사용함 // 동적 노드리스트 반환
- 유사 배열 객체인 요소의 집합을 반환 ( 일반적으로 NodeList 반환 )

**Nodes & Elements**

- 노드는 DOM을 구성하는 객체이며 DOM은 모두 노드로 이루어짐
- 노드는 트리 구조로 구성되어 있음

- 렌더링 된 HTML의 태그에서 생성된 노드이며 내부에는 텍스트가 없음
- 특별한 속성과 메서드가있음 ( 요소와 상호작용하거나 스타일을 변경할 때 )

### DOM에서 요소 선택하기
```jsx
<h1 id="main-title">Hello</h1>
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```
document.getElementById('main-title') // id로 요소 선택
document.querySelector('#main-title') // 태그 이름으로 요소 선택

변수에 저장해 사용할 수 있음

### DOM 프로퍼티 탐구 및 변경
```jsx
<p id="welcome-text" class="text-default">Welcome!</p>
const p = document.getElementById('welcome-text')

p.textContent : "Welcome!" // 텍스트 콘텐츠에 엑세스
p.id : "welcome-text" // id에 엑세스
p.className : "text-default" // 클래스 이름에 엑세스

p.className = 'new-class' // 클래스 이름 변경
p.style.color = 'red' // 스타일 변경
// 주의할점 : 스타일은 camelCase로 작성해야함 p.style.background-color (x) / p.style.backgroundColor (o)
```
어떤 프로퍼티를 사용 할 수 있는지는 console.dir(p)를 통해 확인 가능

자바스크립트에서 작업한 내용은 새로고침을 하면 전부 사라짐
메모리에서 기존의 애플리케이션을 삭제하고 새로운 애플리케이션을 만들기 때문

### 속성 vs 프로퍼티

속성은 프로퍼티에 매핑되어 있고 실시간 동기화가 설정되어있기 때문에 혼동하기 쉬움

<input id="input-1" class="input-default" value="Enter text...">

id, class, value를 HTML 코드에서 작성하기 때문에 속성이라고 부른다
즉, HTML 태그에 추가하는 것은 해당 태그의 속성

HTML코드를 작성할 때 속성은 개념은 생성된 DOM 개체에 특정한 기본 구성을 제공하는 것
이것이 속성이 하는 일이고 프로퍼티로 변환되는 것

프로퍼티는 HTML 코드를 기반으로 생성된 객체에 저장된 값

모든 속성이 프로퍼티에 일대일 매핑되는 것은 아니지만 input id는 일대일로 매핑돼서 id 속성과
id 프로퍼티가 있습니다

속성 값을 바꾸면 프로퍼티 값이 업데이트되고 반대도 됨 즉, 실시간 동기화가 된다

항상 속성 이름이 프로퍼티 이름과 같은 것은 아님

setAttribute('이름', '값') 메서드를 사용하면 속성을 추가하거나 변경할 수 있음
getAttribute('이름') 메서드를 사용하면 속성 값을 가져올 수 있음

### 다수의 요소 선택하기

```jsx
const allLis = document.querySelectorAll('li') // 모든 li 요소 선택
const allLis = document.getElementsByTagName('li') // 모든 li 요소 선택

allLis[0] // 첫 번째 li 요소 선택
for (const li of allLis) {
  console.dir(li) // 모든 li 요소에 접근
}
```

### DOM의 기초

**Traversing the DOM**

- 이미 선택한 요소를 이용해서 이 요소를 기반으로 자식 혹은 형제 요소등으로 옮겨갈 수 있는 것
- 자식(Child), 후손(Descendant), 부모(Parent), 조상(Ancestor)

```jsx
<div>
  <p>
    A <em>Test!</em>
  </p>
</div>
```
p는 div의 자식 요소이고 em은 p의 자식 요소이다
p는 div의 자식이자 후손이며 em 태그는 div의 자식은 아니지만 후손이다
div는 p의 부모요소지만 em의 부모요소는 아니다
div는 p의 조상이며 em의 조상이기도 하다

- 부모 요소 혹은 부모 노드는 parentNode or parentElement
- parentNode는 모든 노드에 사용 가능하고 parentElement는 요소(즉, HTML요소 객체만 선택)에만 사용 가능

- 자식 요소 혹은 자식 노드는 childNodes or children
- childNodes는 모든 노드에 사용 가능하고 children은 요소(즉, HTML요소 객체만 선택)에만 사용 가능 

### 자식 노드&요소 

```jsx
<header>
  <h1 id="main-title">Hello</h1>
</header>

<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```jsx
const ul = document.querySelector('ul')
ul.children // ul의 자식 요소들을 반환 (유사 배열 HTMLCollection 반환)
ul.children[1] // 두 번째 자식 요소 반환

ul.childNodes // ul의 자식 노드들을 반환 (유사 배열 NodeList 반환) 텍스트 노드를 포함

ul.firstElementChild // 첫 번째 자식 요소 반환
ul.lastElementChild // 마지막 자식 요소 반환

ul.firstChild // 첫 번째 자식 노드 반환
ul.lastChild // 마지막 자식 노드 반환
```

### 부모 노드&요소

```jsx
const li = document.querySelector('li')
li.parentElement // li의 부모 요소 반환
li.parentNode // li의 부모 노드 반환

// 둘은 왠만하면 거의 같음 왜냐하면 요소 노드만이 자식 노드를 가질 수 있기 때문
// 예외 경우가 딱 하나 있음

document.documentElement.parentElement // null 반환
document.documentElement.parentNode // #document 반환

li.closest('body') // li의 가장 가까운 조상 요소 반환
li.closest('header') // null 반환 (조상이 아니기 때문)
```





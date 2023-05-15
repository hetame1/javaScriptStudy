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

Nodes & Elements

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
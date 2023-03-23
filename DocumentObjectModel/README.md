### Nodes
- DOM을 구성하는 객체이며, DOM은 모두 노드로 이루어집니다

### Elements
- 태그에서 생성된 노드이며 내부에는 텍스트가 없음

---

### querySelector(), getElementById()
- 한 번에 하나의 요소를 선택
- 단일 요소에 액세스
- querySelector는 css 파일에서 사용할 수 있음
- getElementById는 HTML 요소에 할당되었을 ID를 가지고 요소를 선택

### querySelectorAll(), getElementsByTagName(),...
- 다중 요소를 선택
- 유사 배열 객체인 요소의 집합을 반환 : like NodeList
- 쿼리 선택자로 css 선택자를 사용

---

`getElementById`는 ID 속성을 이용하여 요소를 선택 
이 메소드는 문서 전체에서 ID가 일치하는 첫 번째 요소를 반환

`querySelector`는 CSS 선택자를 사용하여 요소를 선택
 메소드는 문서에서 일치하는 첫 번째 요소를 반환

`querySelector`는 클래스 이름, 태그 이름, 속성 등 다양한 방법으로 요소를 선택할 수 있다.
따라서, `getElementById`보다는 더 유연한 선택 기능을 제공

`getElementById`는 ID를 사용하여 요소를 선택하는 데 특화되어 있으며, `querySelector`는 CSS 선택자를 사용하여 요소를 선택할 수 있다 
둘 다 JavaScript에서 HTML 요소를 선택하는 데 사용할 수 있다

---

```js
const h1 = document.querySelector('h1');

h1.textContent // h1 에 적혀있는 html 내용
h1.className // class 이름
h1.style.// 속성 입력해서 사용가능
console.dir(h1); // h1에 대한 정보를 볼 수 있음
```

### 항상 속성이름이 프로퍼티 이름과 같은 것은 아님

속성은 HTML 요소의 특성을 나타내며, `getAttribute()` 메서드를 사용하여 접근할 수 있다
예를 들어, `<img>` 요소의 `src` 속성은 이미지 파일의 URL을 나타냄
따라서, `getAttribute('src')`를 사용하여 이미지 파일의 URL을 가져올 수 있다

프로퍼티는 자바스크립트 객체의 특성을 나타내며, 객체의 속성 값으로 설정
예를 들어, `document.body`는 `document` 객체의 `body` 프로퍼티를 나타내며, 이 프로퍼티는 문서의 `<body>` 요소를 나타냄
따라서, `document.body`는 문서의 `<body>` 요소에 대한 자바스크립트 객체를 반환
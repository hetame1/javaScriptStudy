```jsx
function a(callback) {
  setTimeout(() => {
    console.log('A')
    callback()
  }, 1000);
}

function b(callback) {
  setTimeout(() => {
    console.log('B')
    callback()
  }, 1000);
}

a(() => {
  b(() => {
    console.log('Done')
  })
})
```

- `콜백지옥` 관리하기 힘듬

### Promise 객체 사용

```jsx
function a() {
  // promise: 약속의 객체
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('A')
      resolve('Hello')
    }, 1000);
  })
}

function b() {
  // promise: 약속의 객체
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('B')
      resolve()
    }, 1000);
  })
};

function c() {
  // promise: 약속의 객체
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('C')
      resolve()
    }, 1000);
  })
};


async function test() {
  await a()  A
  await b()  B
  await c()  B
  const res = await a() 
  console.log(res)  Hello
  console.log('Done')
}

test()
```

### 만약 await를 사용하지 못한다면

```jsx
function test() {
  a().then(() => {
    b().then(() => {
      c().then(() => {
        console.log('Done!')
      })
    })
  })
}
```

이 코드를 개선하면

```jsx
function test() {
  a().then(() => {
    return b()
  }).then(() => {
    return c()
  }).then(() => {
    console.log('Done')
  })
}

// 반환값이 한개이기 때문에 조금 수정해주면

function test() {
  a()
    .then(() => b())
    .then(() => c())
    .then(() => {console.log('Done')
  })
}
```

### 예외 처리

```jsx
function a(number) {
  return new Promise((resolve, reject) => {
    if (number > 4) {
      reject()
      return
    }
    setTimeout(() => {
      console.log('A')
      resolve('Hello')
    }, 1000);
  })
}

function test() {
  a()
    .then(() => {
      console.log('Resolve')
    })
    .catch(() => {
      console.log('Reject')
    })
    .finally(() => {
      console.log('Done')
    })
} 
```
number값에 4보다 큰 수를 넣으면 Reject 출력
4보다 작은수를 넣으면 Resolve 출력
finally 부분은 전부 출력

*** 위의 코드를 async 로 바꾸면 ***

```jsx
async function test() {
  try {
    await a(8)
    console.log('Resolve')
  } catch (error) {
    console.log('Reject')
  }
}
```
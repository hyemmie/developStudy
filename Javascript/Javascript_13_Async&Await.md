# 13.Async & Await 

## async & await 란?

- async 와 await는 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법이다.  
- 기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완한다.
  

## Asynchronous JavaScript function ( 비동기식 자바스크립트 함수 )

 함수 이름 전에 async 키워드를 사용해서 비동기식 자바스크립트 함수를 생성할 수 있다.  
 화살표 표현식을 사용할 때에는 '()'앞에 키워드를 사용한다. 'async'함수는 항상 promise를 반환한다.

 ``` Javascript
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

const msg = async function() { //Async Function Expression
  const msg = await helloWorld();
  console.log('Message:', msg);
}

const msg1 = async () => { //Async Arrow Function
  const msg = await helloWorld();
  console.log('Message:', msg);
}

msg(); // Message: Hello World! <-- after 2 seconds
msg1(); // Message: Hello World! <-- after 2 seconds
```


## async & await 장점

 async & await 문법은 프로그램이 실행되는 도중, 필요한 경우에 따라 여러개의 promise가 시작되고나서   
 값을 확인하는 것을 가능하게 한다. 연쇄되는 '.then()'함수의 대안으로 사용된다. 코드의 유지관리가 용이하다.
 
``` Javascript
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

async function msg() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}

msg(); // Message: Hello World! <-- after 2 seconds
```  
 
 await를 사용하지 않았다면 데이터를 받아온 시점에서 콘솔을 출력할 수 있게 콜백 함수나 .then()등을 사용해야 했지만!  
 async await 문법 사용으로 비동기에 대한 사고를 하지 않아도 된다. 


## Async Function Error Handling ( 오류 처리 방식 )

 async 함수는 'try...catch'구문을 사용해서 예외 처리를 한다. 
 프로미스에서 에러처리를 위해 .catch()를 사용했던 것 처럼 async에서는 catch{}를 사용하면 된다.
 

``` Javascript
let json = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors
  alert( user.name ); // no name!
} catch (e) {
  alert( "Invalid JSON data!" );
}
```
 위의 코드를 실행하다가 발생한 네트워크 통신 오류뿐만 아니라 간단한 타입 오류 등의 일반적인 오류까지도 catch로 잡아낼 수 있습니다. 
 발견된 에러는 error객체에 담기기 때문에 에러의 유형에 맞게 에러코드를 처리하면된다.

 
## JavaScript async await operator 추가 예제

 자바스크립트 async함수는 await 오퍼레이터가 앞에 선행하는 구문을 담을 수 있다.

``` Javascript
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

async function msg() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}

msg(); // Message: Hello World! <-- after 2 seconds
```
await의 피연산자는 Promise이다. await 표현식에서, async 함수의 실행은 일시정지 되고 Promise 피연산자가
resolve 되길 기다린다. await 오퍼레이터는 resolved된 값을 반환한다. 
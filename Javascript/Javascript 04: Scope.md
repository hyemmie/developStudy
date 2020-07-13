# Scope

### Scope란

스코프란 **변수가 선언되는 범위**를 의미한다.

### Block

블록은 중괄호 `{ }` 로 묶인 부분을 의미한다. (Object, Class, Function 등등)

### Scope 의 종류

스코프는 아래와 같이 분류할 수 있다. 

- **Global Scope(전역 스코프)**
- **Local Scope(지역 스코프)**
  - **Function Scope(함수 스코프)**
  - **Block Scope(블록 스코프)**

#### Global Scope

변수가 함수 바깥이나 중괄호 `{}` 바깥에 선언되었다면, **Global Scope**에 정의되었다고 한다.

전역 변수를 선언하면, 코드 전체에서 해당 변수를 사용할 수 있다.

그러나 변수의 충돌을 막기 위해 전역 변수를 선언하는 것은 피하는 게 좋다(재선언, 재할당 에러)

> Node.js 에서는 전역스코프를 다르게 정의한다고 한다(추후에 찾아볼 것)

#### Local Scope

변수를 코드의 특정 부분에서만 사용할 수 있다면, **Local Scope**에 정의되었다고 한다.

지역변수에는 Function Scope 와 Block Scope 의 두 종류가 존재한다.

##### Function Scope

함수 내부에서 변수를 선언하면, **Function Scope**에 정의되었다고 한다.

##### Block Scope



잠깐!

함수 선언식(function declaration)

```js
function test() {}
```

함수 표현식(function expression)

```js
const test = function() {}

const test = () => {}
```





<img src="https://miro.medium.com/max/1250/1*94wTu61tmltShnyb5U0kgw.png"  />



블록 밖에서는 블록 안의 변수를 볼 수 **없다.**

블록 안에서는 블록 밖의 변수를 볼 수 **있다.**



Scope Pollution

일반적으로 블록 안의 변수는 블록 밖에 영향을 끼치지 못한다

함수를 호출하면 변수가 바뀐다



자바스크립트는 변수의 범위를 호출한 함스의 지역 스코프부터 전역 변수들이 있는 전역 스코프까지 점차 넓혀가며 찾는다

이를 Scope Chain 이라 한다

재선언? 재할당?

```js
let stars = 'North Star';

const callMyNightSky = () => {
  	let stars = 'Sirius';   	//블록 내에서 변수가 선언이 되었다
};
callMyNightSky();       
console.log(stars)       		// North Star 출력
```

```js
let stars = 'North Star';

const callMyNightSky = () => {
  	stars = 'Sirius';	   		// 블록 안에서 변수 선언 X, 블록 밖의 stars 를 호출
};
callMyNightSky(); 				// 함수를 호출, stars = ‘Sirius’ 로 바뀐다

console.log(stars)       		// Sirius 출력
```



Scope Chain 예시

```js
var name = 'zero'; 		//여기 있구나!!
function outer() { 		
  console.log('외부', name); 		//여기도 없네?
  function inner() { 
    var enemy = 'nero'; 		//이건 블록 안에 있어서 볼 수 없다! 에러 반환
    console.log('내부', name);  	//name 이 어디 있지???
  } 
  inner();  
} 
outer(); 
console.log(enemy); // undefined	//enemy는 어디 있지?

```
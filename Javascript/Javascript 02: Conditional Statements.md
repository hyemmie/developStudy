# Javascript 2

Conditional Statement : 정적인 웹 문서에 동작을 부여하는 프론트엔드 개발 언어

> + A. Block문
> + B. 조건문 
> + C. 논리연산자
> + D. 삼항조건연산자
> + E. 비교연산자
 

## A. Block문

 Block문은 '{ }', 중괄호에 의해 범위가 결정된다.  
 
 일반적으로 제어 흐름 문(if, for, while)과 함께 사용된다.  

 코드를 묶는 가장 기본적인 문법  
 


## B. 조건문 

``` Javascript
if (true) {
  console.log('This message will print!');

if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
```

 조건의 참과 거짓에 따라 수행문이 정해질 때 사용가능하다.  

 괄호 안에 조건, 조건이 될 수 있는 값은 Boolean 값이다. 


``` Javascript
const size = 10;

if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}
```
 조건이 여러 개일 때 사용 가능하다.

``` Javascript
const food = 'salad';

switch (food) {
  case 'oyster':
    console.log('The taste of the sea 🦪');
    break;
  case 'pizza':
    console.log('A delicious pie 🍕');
    break;
  default:
    console.log('Enjoy your meal');
}

// Prints: Enjoy your meal
```
 조건이 여러 개일 때 사용 가능하다.

 False값을 반환하는 경우
 
 * false
 * undefined: 값을 할당하지 않은 변수는 undefined 값을 가진다.
 * null: null타입은 딱 한 가지 값, null을 가질 수 있다.
 * 0
 * nan
 * The empty string(“”)


## C.논리연산자 (Logical Opertator)

1. && : And
 두개의 피연산자를 가지는 경우, 모두 true일 때 true값을 반환

2. || : Or
 피연산자들 중 하나라도 true가 있으면 true값을 반환

3. ! : Not
 
* var somethingElse = true && 100; console.log(somethingElse);  
// 100을 반환  
&& 연산자의 우선순위가 더 높다.


## D.삼항조건연산자 (Tenary Operator)
 
 condition ? expr1 : expr2
 condition이 true이면 연산자는 expr1의 값을 반환하고 false라면 expr2의 값을 반환합니다.

``` Javascript
let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
```
 아래와 같이 바뀔 수 있다.

``` Javascript
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
```


## E. 비교연산자 (Comparison Operater)

+  == 동등연산자 : 두 피연산자의 자료형이 같지 않은 경우 같아지도록 변환한 후, 엄격비교를 수행합니다. 피연산자가 모두 객체라면, JavaScript는 내부 참조를 보고, 둘 다 메모리의 같은 객체를 바라보고 있는지 판별합니다.
+ != 부등연산자 : 두 피연산자가 같지 않은 경우 참을 반환한다.
+ === : 일치연산자
+ !== : 불일치 연산자
+ '>' : 초과연산자
+ '>=' : 이상 연산자
+ '<' : 미만 연산자
+ '<=' : 이하 연산자



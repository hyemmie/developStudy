migr# 3. Functions

- 함수는 어떤 일을 수행하는 일련의 과정을 의미한다. 예를 들어 직사각형의 넓이를 구하기 위해서 우리는

1.  가로의 길이를 구하고
2.  세로의 길이를 구한 후에
3.  그 두 값을 곱한다.

        직사각형의 넓이를 구하는 이 일련의 과정을 통틀어 함수라고 말한다.

- 같은 일을 여러 번 반복해야 할 때 함수를 만들어서 사용한다.
- 자바 스크립트에서는 함수를 만드는 여러가지 방법이 존재한다.

---

> Function Declaration

- 자바 스크립트에서 함수를 만드는 하나의 방법.

![](https://github.com/hyemmie/developStudy/blob/master/img/javascript03_2020-06-28__7.44.32.png)

_anatomy of a function declaration_

- `function` 키워드를 사용하여 함수를 만든다는 것을 명시하고, 뒤이어 함수의 이름(_identifier_)을 정해준다. 함수의 내용(_function body_)은 중괄호(*curly bracket*s)로 감싸준다. 일반적으로 함수의 선언은 함수 호출이 이루어지기 전 이루어져야 하므로 코드 상단에 위치한다.
- _hoisting_ 이란?

  원래 함수를 사용하기 위해선, 함수 호출 시점 이전에 그 함수가 선언되어 있어야 한다. 하지만 자바스크립트에서는 _hoisting_ 이라는 특징 때문에 함수가 선언되어 있기만 하다면 위치에 관계없이 그 함수를 호출할 수 있다.

  ```jsx
  console.log(helloWorld());

  function helloWorld() {
    console.log("Hello world!");
  }
  ```

  _hoisting_ 은 변수 및 함수에 모두 적용되는 개념이므로 조금 더 복잡한 내용이지만 일단은!!

- 함수를 호출하기 위해서는 선언된 함수의 *identifier*를 사용한다.

`greetWorld(); // prints 'Hello, World!'`

---

> Parameters and Arguments (매개 변수와 인자)

![](https://github.com/hyemmie/developStudy/blob/master/img/javascript03_2020-06-28__8.08.14.png)

- 함수 외부에서 어떤 값들을 받아 와서 그 값들을 함수의 본체에서 사용하고 싶을 경우 함수의 선언 단계에서 일종의 *placeholder*로서 *parameters*를 명시한다. 선언된 *parameters*는 함수 안에서 변수와 같은 방식으로 사용된다. width

![](https://github.com/hyemmie/developStudy/blob/master/img/javascript03_2020-06-28__8.08.28.png)

- *parameters*를 명시한 함수를 호출할 때는 각각의 _parameter_ 에 전달 될 값(value)을 입력해주어야 하는데, 이것들을 _arguments_ 라고 부른다.
- _default parameters_(ES6): 만약 _parameters_ 가 명시된 함수를 호출할 때 값을 전달해주지 않았다면 `undefined` 가 반환되는데 이런 문제점을 방지하기 위하여 함수 parameter에 설정된 기본값을 의미한다.

```jsx
function greeting(name = "stranger") {
  console.log(`Hello, ${name}!`);
}

greeting(); // 'Hello, stranger!'
greeting("Nick"); // 'Hello, Nick!'
```

---

> Return

- 일반적으로 함수의 몸체 안에서 계산된 값은 함수 안에서만 유효하다. 이 값을 함수 밖에서 사용하기 위해서는 `return` 키워드를 사용해야 한다.

```jsx
function rectangleArea(width, height) {
  area = width * heigth;
}

console.log(rectangleArea(5, 7)); // prints 'undefined'

// -----------------------------------------------------------------

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return "음수 ㄴㄴ";
  }
  return width * height;
}

console.log(rectangleArea(5, 7)); // prints '35'
```

---

> Helper Functions

- 때로는 함수의 `return` 값을 다른 함수에서 또 사용하는 경우가 있다.

```jsx
function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celsius) {
  return mutiplyByNineFifths(celsius) + 32;
}

getFahrenheit(15);
```

- 이렇게 다른 함수 안에서 보다 기초적인 작업을 수행하기 위해 사용되는 함수들을 _helper functions_ 라고 한다.

---

> Function Expression

- 함수를 정의하는 한 방법

```jsx
// function declaration

function plantNeedsWater(day) {
	if (day === 'Wednesday')
		return true;
	else return false;
}

// function expression
// A function with no name is called an *anonymous function*

~~~~const plantNeedsWater = function(day) {
	if (day === 'Wednesday')
		return true;
	else return false;
}

```

- function declarations vs function expressions

  [https://www.sitepoint.com/function-expressions-vs-declarations/](https://www.sitepoint.com/function-expressions-vs-declarations/)

  1. As closures
  2. As arguments to other functions
  3. As immediately Invoked Function Expressions (IIFE: 정의 되자마자 실행되는 함수)

---

> Arrow Functions(ES6)

- `() =>` 표기법을 사용한 함수 작성 방식 (_function expression_ 보다 더 압축)
- `function` 키워드를 사용하지 않는 대신에, 함수의 몸체 방향으로 `=>` 기호를 사용한다.

```jsx
// function declaration

function plantNeedsWater(day) {
  if (day === "Wednesday") return true;
  else return false;
}

// function expression
// A function with no name is called an *anonymous function*

const plantNeedsWater = function (day) {
  if (day === "Wednesday") return true;
  else return false;
};

// arrow functions

const planetNeedsWater = (day) => {
  if (day === "Wednesday") return true;
  else return false;
};
```

---

> Concise Body Arrow Functions

- 전달되는 _parameters_ 가 하나일 경우 `()` 생략할 수 있다.

![](https://github.com/hyemmie/developStudy/blob/master/img/javascript03_2020-06-29__10.17.51.png)

- _function body_ 가 **한 줄**로 되어있는 경우 `{}` 기호를 생략할 수 있고 이 경우 `return` 키워드가 없어도 결과 값이 자동으로 반환된다. 이를 _implicit return_ 이라고 한다.

```jsx
// function declaration

function squareNum(num) {
  return num * num;
}

// Concise Body Arrow Functions
const squareNum = (num) => num * num;
```

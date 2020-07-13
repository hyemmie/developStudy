# Intro to JSX

## JSX란?

``` js
const h1 = <h1>Hello world</h1>;
```
변수에 h1태그를 할당한다?

JSX (JavaScript XML): 자바스크립트에 XML을 추가한 확장형 문법

XML은 HTML을 확장한 문법이므로, JSX를 활용하면 하나의 파일에 자바스크립트와 HTML을 동시에 작성할 수 있다!

하나의 변수 안에 ```<h1>, <p>``` 태그를 할당하는 것은 물론이고

```js
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};
```

오브젝트의 각 value에 HTML 코드를 작성하는 것도 가능하다.

## Attributes in JSX

``` js
const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;
// src, alt, width, height 추가

const title = <h1 id="title">Introduction to React.js: Part I</h1>; 
// id 추가
```
JSX도 HTML과 마찬가지로 태그 안에 여러 attributes를 추가할 수 있다.

## Nested JSX

JSX도 HTML과 마찬가지로 여러 요소들 사이의 포함 관계가 존재할 수 있다.

``` js
<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>
```

이러한 HTML 코드를 JSX에서 변수에 저장하려면?

``` js
const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
 );
```

JSX 코드가 한 줄이 넘어가는 경우에는 세미콜론 오류 방지를 위해 소괄호로 코드를 묶어주어야 한다.

(하지만 코드카데미의 간단한 예제에서는 소괄호로 묶지 않아도 오류가 나지 않았다...)

## JSX Outer Elements

``` js
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
```
JSX 코드는 위 코드와 같이 하나의 가장 상위 요소가 나머지 자식 요소들을 감싸고 있는 형태여야 한다.

```js
const paragraphs = (
  <p>I am a paragraph.</p> 
  <p>I, too, am a paragraph.</p>
);
```

이 코드의 경우 전체를 감싸는 하나의 요소가 없으므로

```js
const paragraphs = (
  <div>
    <p>I am a paragraph.</p> 
    <p>I, too, am a paragraph.</p>
  </div>
);
```
<div> 태그 등으로 전체를 감싸주어야 한다!

## Rendering JSX

이렇게 작성한 JSX 코드를 화면에 출력하려면 render 과정을 거쳐야 한다!

``` js
import React from 'react';
import ReactDOM from 'react-dom';

// render하는 부분
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
```
ReactDOM(Document Object Model : 리액트를 웹사이트에 출력하는 걸 도와주는 모델)을 import한 후 render 메서드를 사용하여 화면에 출력한다.

render 메서드는 출력할 요소와 위치를 parameter로 받고, (``` ReactDOM.render(출력할 요소, 출력할 위치);``` )

첫 번째 파라미터인 출력할 요소는 두 번째 파라미터인 출력할 위치(편의상 위치로 표현하지만 사실은 선택된 요소)에 덧붙여진다.

```document.getElementById('app')```의 경우 자바스크립트 내장 함수를 통해 app이라는 id를 가진 요소에 접근하게 되며,

그 요소 안에 첫 번째 파라미터로 받은 ```<h1>Hello world</h1>```가 덧붙여지게 된다.

```js
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

ReactDOM.render(
  toDoList, 
  document.getElementById('app')
);
```
render 메서드의 첫 번째 parameter는 JSX 코드 자체뿐만 아니라 코드가 저장된 변수도 가능하다!


## The Virtual DOM

리액트는 새로운 화면을 render할 때 가상 DOM을 생성한 후 기존 DOM과 비교하여 변화가 생긴 부분만 수정하는 가상 화면(Virtual DOM) 원리를 사용한다!


``` js
const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:

ReactDOM.render(hello, document.getElementById('app'));

// This won't do anything at all:

ReactDOM.render(hello, document.getElementById('app'));
```

+ 왜 hello가 덧붙여서 두 번 render 되지 않는가..?

>``` ReactDOM.render(element, container[, callback]) ```
>
>React 엘리먼트를 container DOM에 렌더링하고 컴포넌트에 대한 참조를 반환합니다(무상태 컴포넌트는 null을 반환합니다).
>
>React 엘리먼트가 이전에 container 내부에 렌더링 되었다면 해당 엘리먼트는 업데이트하고 최신의 React 엘리먼트를 반영하는 데 필요한 DOM만 변경합니다.
>
>추가적인 콜백이 제공된다면 컴포넌트가 렌더링되거나 업데이트된 후 실행됩니다.
>
>출처 : [react-dom 공식문서](https://ko.reactjs.org/docs/react-dom.html)

[DOM이란 무엇인가?](https://wit.nts-corp.com/2019/02/14/5522)

[가상 DOM이란 무엇인가?](https://www.codecademy.com/articles/react-virtual-dom)

[벨로퍼트씨가 추천한 동영상 : 리액트와 가상DOM](https://www.youtube.com/watch?v=muc2ZF0QIO4)





# Advanced JSX

## className

```js
<h1 className="big">Hey</h1>
```

JSX에서는 HTML과는 다르게 attribute로 class가 아닌 className을 사용하는데, 이는 class로 작성할 경우 자바스크립트의 클래스로 인식해 오류가 나기 때문이다.

## Self-closing tags

```<div>```와 opening tag나 ```</div>``` 와 같은 closing tag가 아닌 ```<img>```, ```<input>```과 같은 태그들을 self-closing tag라고 한다.

HTML에서는 self-closing tag를 닫을 때 /를 입력하지 않아도 오류가 없으나 JSX에서는 꼭 ```<   />``` 형태로 닫아줘야 한다.

```js
Fine in HTML with a slash:

  <br />

Also fine, without the slash:

  <br>


Fine in JSX:

  <br />

NOT FINE AT ALL in JSX:

  <br>
```

## JavaScript in JSX

JSX 코드 안에 변수 삽입 등 자바스크립트 코드를 작성해야 하는 경우들이 있다. 

이럴 때는 {}를 사용한다.

이 때, {} 자체는 JSX도 자바스크립트도 아니며 단지 JSX 속에서 자바스크립트 코드의 시작을 알리는 마커일 뿐이다. (string을 ''안에 나타내는 것과 비슷하다!)

```js
// Declare a variable:
const name = 'Gerdo';

// Access your variable 
// from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;
```

변수 자체 뿐만 아니라 변수의 attributes, event handler 등에도 {}를 통해 자바스크립트 코드를 작성할 수 있다. 

```js
// attributes example
const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);

// event handler example
function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}

<img onClick={myFunc} />
```

## JSX conditional

자바스크립트 코드를 JSX 안에 삽입할 수 있지만, ```if```문의 경우는 불가능하다.

```js
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)
```
위 코드의 경우 바르게 실행이 되지 않는다.

if문을 정상적으로 사용하려면 if, else문 자체를 JSX 속에 삽입하지 않아야 한다.

```js
import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}
```

## JSX conditional : Ternary Operator

JSX에서 조건문을 사용할 수 있는 방법이 있다. 바로 삼항연산자 👍 

```js
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```

## JSX conditional : && Operator

&& 논리 연산자는 리액트 특화 연산자는 아니지만 놀랍게도 리액트에서 종종 쓰인다!

주로 ```(조건) && (JSX)```의 형태로, 앞 조건이 true일 경우 JSX가 출력되고, false면 출력되지 않게 하기 위해 사용되는 것으로 보인다.

```js
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
```

삼항 연산자를 포함해 여태 예시들은 특정 조건에 따라 둘 중의 하나를 선택하는 경우였는데, && 연산자는 이러한 경우에는 적합하지 않다.

&& 연산자는 몇몇 코드만 실행되거나, 아니면 아예 실행되지 않거나! (위 예시의 경우 age, baby 조건에 해당될 때만 코드 실행) 와 같은 조건에 적합하다.

## .map() in JSX

array 메서드(이전에 iterator라는 이름으로 공부함)인 .map() 또한 JSX에서 쓰인다.

```js

const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>
```

.map()을 통해 생성된 listItems array를 <ul>...</ul> 사이에 나타낸 맨 아래줄의 코드는

```
<ul>
  [<li>Home</li>,
  <li>Shop</li>,
  <li>About Me</li>]
</ul>
```

와 같은 형태일 것이다!

## Keys

key는 list에서 id와 같이 특정 요소에 접근하기 위해 설정한 JSX attribute이다.

id와 다른 점은, 눈에 보이는 작업보다는 메모리 내부에서 list를 기억해야 하거나, 섞어야 할 때 등의 상황에서 활용된다.

```js
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
```

## React.createElement

맨 처음에 나왔던 ```const h1 = <h1>Hello world</h1>;```를 JSX 없이 순수 자바스크립트 코드만으로 작성한다면,

```js
const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);
```
와 같은 형태일 것이다.

리액트 엔진이 JSX의 XML 구조를 분석하여 위와 같은 자바스크립트 함수의 코드로 변환해준다.

사실 우리는 이와 같은 형태로 작성할 일은 없기 때문에 자세히는 몰라도 되고... 편리하게 리액트를 누리면 된다..! 👍 

개발자는 JSX만 작성하고, 리액트 엔진이 JSX를 기존 자바스크립트로 해석하는 것을 선언현 화면(Declarative View) 기술이라 부른다고 한다!

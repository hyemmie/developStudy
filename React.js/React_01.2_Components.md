# React
-----

# 컴포넌트 (component)  

 컴포넌트란 무엇인가?  

- 컴포넌트란, 직역하자면 구성요소!<br/>
 하나의 작업을 담당하며 웹, 앱 인터페이스 일부의 모양, 동작 및 상태를 정의 하는데 사용되는 재사용 가능한 코드 조각이다.<br/> 
- 컴포넌트에는 클래스 컴포넌트와 함수형 컴포넌트가 있다.
- 컴포넌트를 팩토리(자바스크립트 문법)로 사용하여 무수히 많은 컴포넌트 인스턴스를 생성할 수 있다.

 ## Import React ( Javascript React Library )

리액트를 사용하기 위해서, 우리는 리액트의 메서드를 담은 라이브러리를 객체에 담아 가지고 와야한다.

``` Javascript
import React from 'react';
```

React라는 이름의 변수이름을 가진 객체를 생성하고 이것을 통해 라이브러리를 가져올 수 있다.

## Import ReactDOM

``` Javascript
import ReactDOM from 'react-dom';
```
react 라이브러리를 가져오는 것과 마찬가지로 위의 코드라인 역시 리액트 관련 메서드가 담긴 자바스크립트 객체를 가져온다.  
<br/>

*하지만,*<br/>

DOM은 리액트 에서 사용되지만 리액트의 일부가 아니다. 다른 어플리케이션에서도 사용된다.<br/>
`'react-dom'` 으로부터 들어오는 메서드들은 DOM과 상호작용 하기 위한 것이다.<br/>



 ## Class component

  클래스 컴포넌트 : ES6(EcmaScipt 6)에 도입된 class 문법을 사용하여 만드는 리액트 컴포넌트.<br/>

``` javascript
class App extends React.Component{

}
```
 위와 같은 방식으로 컴포넌트를 생성한다.

  - 클래스 컴포넌트 안에는 반드시 render() 메서드가 필요하다.<br/>
  - return()안에는 한 개의 자식만 반환된다.

``` javascript
class Hello extends React.Component {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    );
  }
}
```

- 라이프사이클 API를 사용하거나 state를 사용하는 경우에는 꼭 class component로 정의를 해야한다.


## Function component

함수형 컴포넌트 :  자바스크립트에서 함수를 만드는 방식으로 생성하는 리액트 컴포넌트.  


``` Javascript
function Hello(props) {
  return (
    <div>Hello {props.name}</div>
  );
}
```
-  라이프사이클 API를 사용하지 않고, state로 값을 전달하지 않으며,<br/>
단지 props만 전달해주며 컴포넌트 내에서 기능이 없는 순수한 뷰의 목적으로만 사용될 때는 함수형 컴포넌트로 만드는 것이 성능상 좋다.
- 리액트 16에서는 함수형 컴포넌트가 성능이 조금 더 빨라졌다고 한다.



## JSX capitalization

HTML 태그, 컴포넌트 인스턴스와 구분할 수 있도록 리액트 컴포넌트 클래스의 첫글자는 대문자로 사용해야 한다.(JSX가 다르게 인식한다.)

``` javascript
// This would be considered a component by React.
<ThisComponent />
  
// This would be considered a JSX HTML tag. 
<div>
```



## Multi-line JSX Expression

멀티라인 JSX 표현식을 사용할 때 괄호들이 사용된다.<br/>
아래의 코드블럭에서 `render()`메서드가 괄호로 쌓여 여러 줄로 나뉘어져 있는 것을 확인할 수 있다.

``` javascript
render() {
  return (
    <blockquote>
      <p>
        Be the change you wish to see in the world.
      </p>
      <cite>
        <a target="_blank" href="https://en.wikipedia.org/wiki/Mahatma_Gandhi">
          Mahatma Gandhi
        </a>
      </cite>
    </blockquote>
  )
}
```

## JavaScript functions in React Components

리액트 컴포넌트는  return 구문 전에 자바스크립트 문법을 사용할 수 있다.<br/>
반환문 앞의 자바스크립트는 컴포넌트를 렌더하기 위한 로직을 알려준다.

``` javascript
class Integer extends React.Component {
  render() {
    const randInteger = Math.floor(Math.random() * 10);
    return <p>{randInteger}</p>;
  }
}
```


## JavaScript Objects JSX Attribute values

리액트에서 JSX 속성값은 일반적인 자바스크립트 객체에 저장될 수 있다.


``` javascript
const seaAnemones = {
  src: 'https://commons.wikimedia.org/wiki/Category:Images#/media/File:Anemones_0429.jpg',
  alt: 'Sea Anemones',
  width:  '300px'
};

class SeaAnemones extends React.Component {
  render() {
    return (
      <div>
        <h1>Colorful Sea Anemones</h1>
        <img 
          src={seaAnemones.src}
          alt={seaAnemones.alt}
          width={seaAnemones.width} />
      </div>
    );
  }
}

ReactDOM.render(
  <SeaAnemones/>,
  document.getElementById('app')
);

```

 위 코드에서 자바스크립트 객체인 seaAnemones 의 속성들을 JSX구문(클래스 컴포넌트)에 가져와 사용하는 것을 볼 수 있다.

끝!
# Components Interacting

## 1. Componets Render Other Components
React 에서 아래와 같이 컴포넌트가 다른 컴포넌트를 랜더시킬 수 있다. (아래 예시에서는 Crazy 컴포넌트가 OMG 컴포넌트를 랜더시키고 있다.)
```js
import React from 'react';
import ReactDOM from 'react-dom';

class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}

class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}
```
## 2. this.props
`props`는 컴포넌트가 기본적으로 가지고 있는 오브젝트이다. `this.props`를 통해 접근할 수 있으며 컴포넌트의 정보를 갖고 있다. 
### this.prop 기본 사용
```js
class MyComponent extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>{stringProps}</h1>    // {"foo":"bar"}
        <h2>{this.props}</h2>     // 이렇게 쓰면 작동 안됨. 
        <h2>{this.props.foo}</h2> // bar
      </div>
    )
    
  }
}
ReactDOM.render(<MyComponent foo="bar" />, document.getElementById('app'));
```
`<Greeting myInfo={["top", "secret", "lol"]} />`와 같이 `string` 타입이 아닌 정보를 넣을 땐 `{}`로 감싸줘야 한다. 
### if문
```js
class MyComponent extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);
    if(this.props.foo == 'bar'){
      return <h1>bar</h1>;
    }else{
      return <h1>boo</h1>;
    }
  }
}
```
### 함수도 props로 넘길 수 있다.
아래 예시에서는 `Talker` 클래스의 `talk()`함수를 `Button` 클래스의 `props`로 넘겨 `Button`에서 `onClick`으로 사용하는 것을 볼 수 있다. 
```js
class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}
```
```js
class Talker extends React.Component {
  talk() {
    let speech = 'blah';
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk}/>;
  }
}
```
### Event handlers
| event handler name | prop name  | event           |
|--------------------|------------|-----------------|
| handleClick        | onClick    | click event     |
| handleKeyPress     | onKeyPress | key press event |
```js
class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Click me!
      </button>
    );
  }
}
```
```js
class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick}/>;
  }
}
```
위 `<button>`태그와 아래 `<Button>`태그의 `onClick`은 다르게 취급된다. 위 `<button>`태그의 `onClick`은 evnet listener를 생성하지만, 아래 `<Button>` 의 `onClick`은 그저 여러 props 중 하나일 뿐이다. <br/>
`<button>`처럼 HTML-like JSX elements 일 때만 event listener가 생성된다. 

### this.props.children
```js
// Example 1: "I am a child of BigButton."
<BigButton>
  I am a child of BigButton.
</BigButton>
```
```js
// Example 2: component of <LilButton />
<BigButton>
  <LilButton />
</BigButton>
```
```js
// Example 3: undefined
<BigButton />
```
아래와 같이 ul, li 태그를 이용하여 응용할 수 있다. 
```js
class List extends React.Component {
  render() {
    return (
      <div>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <List>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
      </div>
    );
  }
}

=======> 결과
<ul>
  <li>Sachiko M</li>
  <li>Harvey Sid Fisher</li>
</ul>
```
### defaultProps
props에 아무런 입력이 없는 경우를 대비하여 default props를 설정할 수 있다. 
```js
class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = {text:'I am a button'}
ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);
```
## 3. this.state
`state`는 `props`와는 다르게 바깥에서 선언할 수 없고 안에서 선언해줘야 한다. 
기본적인 선언 방식은 아래와 같다.
```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return <div></div>;
  }
}

<Example /> // state: { mood: 'decent' }
```

### this.setState
```js
const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props); 
    // React.Component의 constructor가 호출된다.
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this); 
    //changeColor에서 this를 사용할 수 있게 해준다.
  }
  
  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
    // 현 state와 merge되게 된다. 
  }
  
  render() {
    return (
      ...
    );
  }
}
```
`setState`을 통해 `state`가 바뀌면 바로 바뀐 결과가 뜨는걸 볼 수 있는데, 이는 `setState` 후 `render()`가 자동으로 불려지기 때문이다. 

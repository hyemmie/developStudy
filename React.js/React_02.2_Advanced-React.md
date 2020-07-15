# Advanced React 


## 1. styles

<br>

 React에서 스타일을 부여하는 방법은 다양한데, 그중 하나가 *inline styles*라고 불리는 방법이다. 이름에서도 쉽게 유추할 수 있듯이, html 요소에 직접 스타일을 입력해주는 방법이다.   

  
```javascript
const styleMe = <h1 style={{ background: 'lightblue', color: 'darkred' }}>Please style me! I am so bland!</h1>;
```   


우리가 알던 html 스타일링 방법과 동일하지만 특별한 점은 `{}`를 **두번 중첩**하여 사용했다는 것이다.
> - 바깥의 `{}`는 이 코드가 jsx가 아닌 java script임을 의미한다.
> - 안의 `{}`는 자바스크립트 객체 literal을 생성해주는데 사용한다. -> 스타일 속성들을 오브젝트로 전달해준다!

<br>

### 만약 지정해줄 스타일이 너무 많아져서 코드가 지저분해진다면??
=> *style object*를 *변수*에 담아서 사용하자!

```javascript
const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop : 100,
  fontSize: 50,
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;
```
> 스타일 오브젝트 변수의 이름을 위와 같이 styles 등으로 할 경우, 다른 환경에서는 이름이 중복되어 문제가 발생될 수 있지만(css를 생각해보면,,,!) 리액트에서는 각 모듈이 독립적으로 구성되므로 `export` 나 `import`만 주의한다면 문제가 생기지 않는다.

<br>

### style naming
```javascript
const styles = {
  'margin-top':       "20px",
  'background-color': "green"
}; // in regular JavaScript

const styles = {
  marginTop:       "20px", // 'marginTop: 20'도 가능하다.
  backgroundColor: "green"
}; // in React
```
> 1. regular JavaScript에서는 프로퍼티 이름으로 'hyphenated-lowercase'를 사용하는데 반해 React에서는 'camelCase' 방식을 따른다.
> 2. regular JavaScript에서는 프로퍼티 값이 거의 대부분 string이지만 React에서는 px을 표기할 때는 `''` 없이 숫자만 사용할 수 있다. 
<br>
---


## 2. Container Components From Presentational Components (컨테이너 / 프레젠테이션 컴포넌트)

<br>

**Programming Patterns?** 
: 'design patterns'이라는 말과 비슷한 개념으로 다양한 상황에서 재사용 가능한 잘 정의된 설계도 ex. Stateless Components Inherit From Stateful Components
> - 소프트웨어 디자인 패턴(software design pattern)은 소프트웨어 디자인에서 특정 맥락에서 공통적으로 발생하는 문제에 대해 재사용 가능한 해결책이다. - 위키피디아
> - 디자인 패턴이 더 궁금하다면? https://delivan.dev/react/programming-patterns-with-react-hooks-kr/  


<br>

### 컨테이너 / 프레젠테이션 컴포넌트 ???    
: *programming patterns*중 하나로, 만약 어떤 컴포넌트가 너무 많은 메소드나 프로퍼티를 가지고 있어 코드가 복잡해졌을 때 사용하는 방식
1. 컴포넌트의 여러 메소드를 크게 *기능 구현*과 *렌더링*으로 나누어서 각각 다른 컴포넌트로 관리한다.
2. **오로지** HTML like JSX의 *렌더링*을 담당하는 컴포넌트를 *presentational components*라고 한다. 이 컴포넌트는 `render()`외에 어떤 메소드도 포함하고 있지 않다.
3. 그 외 `props`를 활용한 계산이나 여타 로직들을 관리하는 컴포넌트를 *container components*라고 부르며 이 곳에서 *presentational components* 또한 렌더된다.
<br>

```javascript
// presentational components : export를 해주어 contatiner components에서 접근하도록 한다! 
export class GuineaPigs extends React.Component {
  render() {
    const src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
} 

// container components : presenational components를 렌더해주는 역할까지 포함
import { GuineaPigs } from '../components/GuineaPigs';

class GuineaPigsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src}/>
  }
}

ReactDOM.render(
  <GuineaPigsContainer />,
  document.getElementById('app')
);
```
<br>

- 장점
> 1. 기능과 UI가 명확하게 구분되며, 따라서 재사용하기 편하다.   
> 2. 로직을 건드리지 않고도 UI 관리를 쉽게 할 수 있다.

**더 알고 싶다면?**
- https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0 (원문)
- https://blueshw.github.io/2017/06/26/presentaional-component-container-component/ (번역문)
- https://medium.com/@learnreact/container-components-c0e67432e005#.gacsoomn1

---
## 3. stateless functional components

<br>

앞서 보았듯이, *presentaional components*는 `render()`라는 하나의 메소드만을 갖는 컴포넌트이다.   
만약 어떤 컴포넌트가 오직 `render()` 하나의 메소드만 가지고 있다면, `React.Component`를 사용하지 않고 *JavaScript function*처럼 작성할 수 있다.   
이렇게 쓰여진 컴포넌트 클래스를 **stateless functional components**라고 한다.
<br>

```javascript
import React from 'react';
// presentaional component
export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}

// stateless functional component
export const GuineaPigs = props => {
    let src = props.src; // props 자체를 파라미터로 받아왔기 때문에 this. 없이도 접근이 가능하다.
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
}
```

컴포넌트 클래스에서 우리가 컴포넌트의 동적 정보(*dynamic informations*)를 `props`와 `state`로 관리했던 것처럼, *stateless functional components*에서는 그것들을 모두 오브젝트에 담아 함수의 파라미터로 전달하여 접근한다. 이 때, 파라미터의 이름으로는 `props`이 관례적으로 사용된다고 한다. (props와 state 이외의 파라미터는 추가적으로 전달될 수 없다고 한다.)

---
## 4. propTypes

<br>

`propTypes`는 클래스 컴포넌트 선언 단계에서, 나중에 전달받을 `prop`의 자료형을 미리 명시해두고 싶을 때 사용한다. 이것은
1. **유효성(*validation*)** 차원에서 이점을 갖는다 : 자료형을 기반으로 해당 `prop`이 어떤 작업에 사용될지 알 수 있고, 적절한 자료형의 값이 아니거나 아예 값이 지정되지 않았을 경우에는 개발 콘솔에 경고를 해줌으로써 버그를 방지하는데 도움이 된다.
2. **문서(*Documentation*)**의 역할을 한다 : 컴포넌트를 하나씩 살펴보지 않아도 컴포넌트에 대한 대략적인 정보를 한눈에 파악할 수 있다.
<br>
<br>   

```javascript
import React from 'react';

export class MessageDisplayer extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.message}</h1>
                <h1>{this.props.age}</h1>)
            </div>
        );
    }
}

MessageDisplayer.propTypes = {
    message: React.PropTypes.string.isRequired, // 선언된 prop 각각에 해당하는 정보가 있어야 한다.
    age: React.PropTypes.number.isRequired,
};
```
위에서 볼 수 있듯이, 컴포넌트의 `propTypes`를 정의해주기 위해서는 `컴포넌트이름.propTypes` 객체를 정의해주어야 한다. 이 객체안에는 컴포넌트에 사용된 `prop` 각각에 대한 프로퍼티가 존재해야 하며, 프로퍼티 값의 형식은 `React.PropTypes.expected-data-type-goes-here`이다. 이때 `.isRequired`를 추가해준다면, `prop`에 대한 값이 전달되지 않을 경우 경고 메시지를 출력해준다.
<br>
<br>
우리는 컴포넌트의 `propTypes`을 `MessageDisplayer.propTypes`라는 방법으로 접근했다. 이는 `MessageDisplayer` 컴포넌트 안에 `propTypes`라는 프로퍼티가 있다는 말인데, 이 점을 활용하여 다음과 같은 방식으로 `propTypes`를 정의할 수도 있다. 
<br>

```javascript
import React from 'react';

export class MessageDisplayer extends React.Component {
    static propTypes = {
        message: React.PropTypes.string.isRequired,
        age: React.PropTypes.number.isRequired,
    }

    render() {
        return (
            <div>
                <h1>{this.props.message}</h1>
                <h1>{this.props.age}</h1>)
            </div>
        );
    }
}
```
> 컴포넌트에 대한 정보를 한눈에 파악할 수 있다는 `propTypes`의 장점인 *documentation* 측면에서, `propTypes`를 컴포넌트 선언 이후에 정의하는 것보다는 이와 같은 방식이 더 좋다고 한다.

- stateless functional component를 선언했을 때도 마찬가지로 `이름.propTypes{}` 오브젝트를 정의해준다. 하지만 이 때의 `propTypes`는 함수의 프로퍼티로 취급받는 것으로 (따라서 이름을 바꿔도 문제가 없는 것 같다) `React.Component`를 사용했을 때 패키지로서 사용된 `propTypes`과는 차이가 있다.

---
## 5.React Forms

<br>

일반적인 html 환경에서 `form`에 대해서 생각해보면, 유저는 `form` 태그 안의 `input`에 데이터를 입력하지만 서버입장에서는 유저가 `submit` 버튼을 눌러 `form`의 모든 데이터가 **동시에** 보내지기 전까지 데이터에 대한 정보를 알 방법이 없다. 따라서 server가 기대한 값과 실제 `form`에 입력된 값이 다른 경우가 생기는데 웹사이트가 유저가 입력한 데이터의 정보를 요구했을 때 `form`과 서버가 전달해주는 정보가 다를 수 있다는 문제점이 생긴다. React form에서는 이러한 문제를 해결하기 위해 어떤 문자가 추가되거나 사라지는 **즉시** 그 정보를 서버가 알 수 있게 한다.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({userInput: e.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput}/>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);
```
- `render()`에는 `form` 태그도, `submit` 버튼도 없다. 어떻게 정보를 내보낼 수 있을까? React form에서는 *event handler*를 활용한다. `<input />`에는 `onChange={this.handleUserInput}` 이라는 이벤트 핸들러가 있다. 만약 유저가 `input` 필드 안의 정보를 수정한다면 `.handleUserInput()`이 실행된다.
- `handleUserInput()` 함수는 발생한 이벤트를 의미하는 `e`를 파라미터로 받아서, 컴포넌트의 `userInput`이라는 `state`의 값을 `e.target.value`로 바꿔준다. 이 `e.target.value`는 이벤트가 발생한 곳, 즉 `<input />`의 value를 의미한다. `state.userInput`은 초기에는 `''`(blank) 였다가 `handleUserInput()`이 실행될 때마다, 즉 `input`에 문자가 추가 혹은 삭제 될 때마다 업데이트 된다.
- 최종적으로 `return` 문의 `<h1>{this.state.userInput}</h1>`을 통해 유저가 `input` 필드에 입력한 값이 렌더링 된다.

<br>

### Controlled / Uncontrolled components

1. *uncontrolled components* : 자신 고유의 `state`를 가지고 있는, 즉 메모리에 할당된 값을 참조하는 컴포넌트. 값을 변경해주지 않는 이상 이전의 값만을 기억하고 있으므로 데이터의 변화에 따라 즉각적으로 반응하지 못한다.
2. *controlled components* : 자체에 할당된 메모리가 없다. 따라서 어떤 정보를 얻어올 때는 메모리에 저장된 값을 참조하는 것이 아니라 `props`를 통해 정보를 받아온다. 항상 다른 요소를 통해 사용되므로 *controlled* 라고 한다. 위에서도 보았듯이 `props`는 메소드를 이용하여 얼마든지 즉각적으로 변화시킬 수 있으므로 실시간 정보 처리가 가능하다.
3. `<input />`의 경우에는 내부적으로 저장된 값을 참조해오는 방식이기 때문에 `uncontrolled component`이지만 만약 `value` 속성을 추가해줄 때는 *controlled* 되었다고 말한다.

```javascript
let input = document.querySelector('input[type="text"]');

let typedText = input.value; // input.value will be equal to whatever text is currently in the text box.
```

https://soldonii.tistory.com/145
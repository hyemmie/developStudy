# Stateless Components From Stateful Components

## 컴포넌트 복습

#### 컴포넌트

UI 의 일부분을 묘사하는 독립적인 엔티티. 각각 특정한 기능을 담당한다.

하나의 컴포넌트는 더 작은 컴포넌트들로 쪼개질 수 있다. 컴포넌트 간의 **종속관계** 형성.

페이스북은 3만개 이상의 컴포넌트들로 구성되어있다!

ex) 검색 바, 뉴스피드 등 (볼 수 있는 모든 것이 컴포넌트로 이루어져있다!)

#### state

#### props





## Stateless? Stateful?

stateless component:  state를 가지지 않는 컴포넌트

stateful componenet: 한개 이상의 state 를 가지는 컴포넌트



### Stateless Components From Stateful Components

#### stateful component class

In React, a stateful component is a component that has one or more `state` property. While a stateless component doesn’t have any `state` property.



- Parent.js
  - Child.js
  - Sibling.js

constructor 메서드가 있어야 stateful?

파라미터로 props 를 받는다

super(props) 의 뜻

this.state 선언



 Rendering is the only way for a component to pass `props` to another component.

child 를 export

parents 에서 import, name을 쏴줌

이는 child의 this.props.name



 

component 는 클래스?

props 의 정확한 의미가 뭐지

this.props.name

this.props.[something] = 'bad'  이런 식으로 재할당 금지!

**A React component should use `props` to store information that can be changed, but can only be changed by a \*different\* component.**

**A React component should use `state` to store information that the component itself can change.**



### Child Components Update Their Parents' state

```js
super.props ?

this.changeName = this.changeName.bind(this); ?
```

When a user selects a new dropdown item, it will invoke `changeName`, but it *won’t* pass the correct argument! Instead of passing a new name, it will pass an *event object*, as all event listeners do.

This is a common problem when passing down an *event handler* in React! The solution is to define another function.



*1*

The *parent* component class defines a method that calls `this.setState()`.

For an example, look in **Step1.js** at the `.handleClick()` method.

*2*

The parent component binds the newly-defined method to the current instance of the component in its constructor. This ensures that when we pass the method to the child component, it will still update the parent component.

For an example, look in **Step2.js** at the end of the `constructor()` method.

*3*

Once the *parent* has defined a method that updates its state and bound to it, the parent then passes that method down to a *child.*

Look in **Step2.js**, at the `prop` on line 28.

*4*

The *child* receives the passed-down function, and uses it as an event handler.

Look in **Step3.js**. When a user clicks on the ``, a click event will fire. This will make the passed-down function get called, which will *update* the parent’s state.



```js
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }
```



### Child Components Update Their Siblings' state



- A *stateful* component class defines a function that calls `this.setState`. (**Parent.js**, lines 15-19)
- The stateful component passes that function down to a stateless component. (**Parent.js**, line 24)
- That *stateless* component class defines a function that calls the passed-down function, and that can take an *event object* as an argument. (**Child.js**, lines 10-13)
- The stateless component class uses this new function as an event handler. (**Child.js**, line 20)
- When an event is detected, the parent’s state updates. (A user selects a new dropdown menu item)
- The stateful component class passes down its state, distinct from the ability to *change* its state, to a different stateless component. (**Parent.js**, line 25)
- That stateless component class receives the state and displays it. (**Sibling.js**, lines 5-10)
- An instance of the stateful component class is rendered. One stateless child component displays the `state`, and a different stateless child component displays a way to *change* the `state`. (**Parent.js**, lines 23-26)



이건 그냥 재미로 읽어보면 좋을 것 같아서!

[React.js 와 Vue.js 비교 1](https://joshua1988.github.io/web_dev/vue-or-react/)

[React.js 와 Vue.js 비교 2 (번역이 별로지만...)](https://medium.com/@erwinousy/%EB%82%9C-react%EC%99%80-vue%EC%97%90%EC%84%9C-%EC%99%84%EC%A0%84%ED%9E%88-%EA%B0%99%EC%9D%80-%EC%95%B1%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4-%EC%9D%B4%EA%B2%83%EC%9D%80-%EA%B7%B8-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%B4%EB%8B%A4-5cffcbfe287f)
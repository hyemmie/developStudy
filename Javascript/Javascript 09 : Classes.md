# Classes

## Introduction to Classes

클래스 : 상수 및 변수, 생성자, 메서드 등을 정의해놓은 집합

## Constructor (생성자)

생성자 : 클래스의 인스턴스를 생성하는 메서드

```js
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```

키워드 this는 생성자가 생성하는 인스턴스가 해당 클래스의 인스턴스라는 의미

## Instance (인스턴스)

인스턴스 : 클래스의 property들을 가지고 있는 오브젝트

```js
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}

const halley = new Dog("Halley"); // Create new Dog instance
```

## Methods (메서드)

```js
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}
```

class dog의 property인 name과 behavior는 정보 은닉을 위해 .\_name, .\_behavior로 표현했다.

은닉된 정보에 접근하기 위해 this.\_name과 this.\_behavior를 리턴하는 get 메서드를 따로 정의하였으나 사실 메서드를 사용하지 않아도 접근이 가능하다...

정보 은닉은 oop(객체 지향 프로그래밍)의 특징 - 자바 등의 다른 언어에서는 private로 선언했을 경우 접근이 불가능하다 - 이지만 자바스크립트에서는 실제로 지원하지는 않는다고 한다.(?)

단지 개발자들 사이의 convention이라고 한다..!

## Methods Call (메서드 호출)

```js
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

let nikko = new Dog("Nikko"); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
// 오브젝트에 함수를 호출한 경우
let bradford = new Dog("Bradford"); // Create dog name Bradford
console.log(nikko.behavior); // Logs 1 to the console
console.log(bradford.behavior); // Logs 0 to the console
```

메서드는 새로운 인스턴스를 생성한 후 인스턴스.메서드() 형태로 접근한다.

## Inheritance (상속)

<center><img src=http://drive.google.com/uc?id=1c6MDziERdYRNs_Io91EKJy4EkbY1lSY9 width="500" height="350"></center>

여러 개의 property나 method를 공유하는 유사한 두 오브젝트는 상속을 활용할 수 있다.

공통된 property와 method를 모아 부모 클래스를 정의한 뒤, 부모 클래스를 상속받는 각각의 자식 클래스로 구현하면 생성이 편해진다.

```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  get usesLitter() {
    return this._usesLitter;
  }

  incrementBehavior() {
    this._behavior++;
  }
}
```

위와 같이 Cat 클래스가 Animal 클래스를 상속받는 경우, 아래의 코드처럼 간단히 표현할 수 있다.

```js
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
```

공통된 property인 name은 super 키워드를 통해 부모 클래스의 생성자에서 끌어온다.

usesLitter property의 경우는 부모 클래스인 Animal에 없는 property이므로 새로 선언해준다.

```js
const bryceCat = new Cat("Bryce", false);
console.log(bryceCat.name);
bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance
console.log(bryceCat.behavior); // Log value saved to behavior
```

Cat의 인스턴스 bryceCat도 성공적으로 생성되며, Cat 클래스를 정의할 때 명시하지 않은 메서드 .incrementBehavior()도 부모 클래스에서 자연스레 상속받아 사용할 수 있다.

```js
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }

  get usesLitter() {
    return this._usesLitter;
  }
}
```

부모 클래스에는 없으나 자식 클래스에서 사용해야 하는 메서드가 있다면, 클래스를 정의하면서 메서드를 추가해준다.

아래 코드는 상속이 없었다고 가정했을 때 위 코드를 다시 풀어쓴 경우이다!

```js
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get usesLitter() {
    return this._usesLitter;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}
```

## Static Methods

클래스의 메서드 중 그 클래스의 인스턴스에서 사용할 수 없게끔 하려면 static 키워드를 추가해서 static method를 만들 수 있다.

```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ["Angel", "Spike", "Buffy", "Willow", "Tara"];
    const randomNumber = Math.floor(Math.random() * 5);
    return names[randomNumber];
  }
}
```

위 코드의 generateName() 메서드는 Animal 클래스에서 접근했을 때는 사용 가능하지만, Animal 클래스의 인스턴스에서 접근했을 때는 사용할 수 없다.

```js
console.log(Animal.generateName()); // returns a name

const tyson = new Animal("Tyson");
tyson.generateName(); // TypeError
```

tyson이라는 인스턴스를 생성한 후 tyson에서 generateName() 메서드로 접근해 사용하려 하면 오류가 난다.

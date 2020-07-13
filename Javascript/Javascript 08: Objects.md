# 8. Objects


# 객체 ( Objects ) 
 
 - 자바스크립트는 객체(object) 기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 *모든 것* 이 객체이다.   
 - 원시 타입(Primitives)을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체이다.    
 - 자바스크립트의 객체는 키(key)와 값(value)으로 구성된 프로퍼티(Property)들의 집합이다.   
 - 프로퍼티의 값으로 자바스크립트에서 사용할 수 있는 모든 값을 사용할 수 있다.   
 - 자바스크립트의 함수는 일급 객체이므로 값으로 취급할 수 있다.     
 - 따라서 프로퍼티 값으로 함수를 사용할 수도 있으며 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 *메소드* 라 부른다. 

 - *자바스크립트의 객체는 변할 수 있다.*  
 새로운 프로퍼티가 추가될 수 있으며, 존재하는 프로퍼티 역시 삭제, 변경이 모두 가능하다. ('const'로 선언 되었을지라도)

``` Javascript
const student = {
  name: 'Sheldon',
  score: 100,
  grade: 'A',
}

console.log(student)
// { name: 'Sheldon', score: 100, grade: 'A' }

delete student.score
student.grade = 'F'
console.log(student)
// { name: 'Sheldon', grade: 'F' }

student = {}
// TypeError: Assignment to constant variable.
```


## 객체 리터럴 ( Objects Literal )

 - 일반적인 자바스크립트의 객체 생성 방식이다.
 - 중괄호를 사용하여 객체를 생성한다. 
 - '{ }' 내에 1개 이상의 프로퍼티를 기술하면 해당 프로퍼티가 추가된 객체를 생성할 수 있다.  
 - 중괄호 내에 아무것도 쓰지 않으면 빈 객체가 생성된다.


## 생성자 함수 

 동일한 프로퍼티를 가지고 프로퍼티 값만 다른 여러 개의 객체를 생성할 때 유용하게 사용할 수 있는 방식,
 
``` Javascript
// 생성자 함수
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
  };
}

// 인스턴스의 생성
var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');

console.log('person1: ', typeof person1);
console.log('person2: ', typeof person2);
console.log('person1: ', person1);
console.log('person2: ', person2);

person1.sayHello();
person2.sayHello();
```  
 이름이 붙어있다지만 사실상 객체 생성 하는데에 함수 이용해서 편하게 생성하는거,,,

 암튼, 생성자 함수 이름은 일반적으로 대문자로 시작한다. 일반 함수와의 혼란을 방지하기 위해! 
 this는 생성자 함수가 생성할 인스턴스(insatance)를 가리킨다.


## 객체 프로퍼티 ( Objects properties )

 - 프로퍼티 :  
 프로퍼티는 프로퍼티 키(프로퍼티 이름)과 프로퍼티 값으로 구성된다. 
 > - 프로퍼티 키 (key) : 빈 문자열을 포함하는 모든 문자열 또는 symbol값
 > - 프로퍼티 값 (value) : 모든 값


 자바스크립트 오브젝트의 프로퍼티는 점 표기법(dot notation)을 통해 접근할 수 있다.  
 - object.propertyName

``` Javascript
const apple = { 
  color: 'Green',
  price: {
    bulk: '$3/kg',
    smallQty: '$4/kg'
  }
};
console.log(apple.color); // 'Green'
console.log(apple.price.bulk); // '$3/kg'
```

 정의 되지 않은 프로퍼티에 접근 할 경우 'undefined'가 출력된다.

``` Javascript
const classElection = {
  date: 'January 12'
};

console.log(classElection.place); // undefined
```

 key-values 쌍은 콤마(,)로 분리된다.  
 모든 키는 고유하지만 values는 그렇지 않다.
 객체의 key-valuse 쌍을 속성이라고도 한다.


## for-in문

 for-in 문을 사용하면 객체(배열 포함)에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 있다.  
 
 
``` Javascript
let mobile = {
  brand: 'Samsung',
  model: 'Galaxy Note 9'
};

for (let key in mobile) {
  console.log(`${key}: ${mobile[key]}`);
}
```


 
``` Javascript
var array = ['one', 'two'];

// index에 배열의 경우 인덱스가 반환된다
for (var index in array) {
  console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
*/
```

 for-in문은 객체의 문자열 키(key)를 순회하기 위한 문법이다.  
 배열에는 사용하지 않는 것이 좋다.  

 질문거리 
 > - 객체의 경우, 프로퍼티의 순서가 보장되지 않는다. 원래 객체의 프로퍼티에는 순서가 없기 때문이다 배열은 수서를 보장하는 데이터 구조이지만 객체와 마찬가지로 순서를 보장하지 않는다.  
 > - 배열 요소들만을 순회하지 않는다.



## Delete Operator( 삭제 연산자 )

 객체가 만들어진 뒤에 delete operator로 속성을 지우는 것이 가능하다. 
 
 - delete operator는 키와 값을 모두 지운다.
 - delete operator는 속성에만 적용 가능하다. 변수나 함수에서는 쓸 수 없다. 


## Pass-by-value

 자바 스크립트는 값에 의한 전달(pass by value)이 일어나는 5가지 데이터 타입을 가지고 있다.(값이 복사되어 전달된다.)  


 - 원시 타입(Primitive Types)  
 > - Boolean  
 > - Null  
 > - Undefined  
 > - String  
 > - Number 

 원시타입은 값이 한번 정해지면 *변경할 수 없다*.(immutable)  
 또한 이들 값은 런타임(변수 할당 시점)에 메모리의 스택 영역(Stack Segment)에 고정된 메모리 영역을 점유하고 저장된다. 

 ``` Javascript
// Pass-by-value
var a = 1;
var b = a;

console.log(a, b);    // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b);    // 10  1
console.log(a === b); // false
```

 변수 a는 원시 타입인 숫자 타입 1을 저장하고 있다. 
 원시 타입의 경우 값이 복사되어 변수에 저장된다. 
 즉, 참조 타입으로 저장되는 것이 아니라 값 자체가 저장되게 된다. 
 변수 b에 변수 a를 할당할 경우, 변수 a의 값 1은 복사되어 변수 b에 저장된다.

 

## Pass-by-reference
 
 참조에 의한 전달이 일어나는 데이터 타입을 참조 타입, 객체 타입이라고 하며 일반적으로 크게 객체로 볼 수 있다.
 - 참조 타입이란? 객체의 모든 연산이 실제값이 아닌 참조값으로 처리됨을 의미한다.

 - 객체 (Objects)
 > - Array 
 > - Function 
 > - Object

 객체는 프로퍼티를 변경, 추가, 삭제할 수 있기에 *변경 가능한* 값이다.(mutable)  
 따라서 객체 타입은 동적으로 변화할 수 있으므로 어느 정도의 메모리 공간을 확보해야 하는지 예측할 수 없기 때문에 런타임에 메모리 공간을 확보하고  
 메모리의 힙 영역(Heap Segment)에 저장된다.
 
 코드카데미 예제

``` Javascript
const origNum = 8;
const origObj = {color: 'blue'};

const changeItUp = (num, obj) => {
  num = 7;
  obj.color = 'red';
};

changeItUp(origNum, origObj);

// Will output 8 since integers are passed by value.
console.log(origNum);

// Will output 'red' since objects are passed 
// by reference and are therefore mutable.
console.log(origObj.color);
```

 질문

```Javascript
console.log(changeItUp(origNum, origObj));
//undefined
```


 + ex)


 ``` Javascript
var foo = {
  val: 10
}

var bar = foo;
console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // true

bar.val = 20;
console.log(foo.val, bar.val); // 20 20
console.log(foo === bar);      // true
```
 
 foo 객체를 객체 리터럴 방식으로 생성하였다. 이때 변수 foo는 객체 자체를 저장하고 있는 것이 아니라 생성된 객체의 참조값(address)를 저장하고 있다.
  
 변수 bar에 변수 foo의 값을 할당하였다. 변수 foo의 값은 생성된 객체를 가리키는 참조값이므로 변수 bar에도 같은 참조값이 저장된다.  
 즉, 변수 foo, bar 모두 동일한 객체를 참조하고 있다. 
 따라서 참조하고 있는 객체의 val 값이 변경되면 변수 foo, bar 모두 동일한 객체를 참조하고 있으므로 두 변수 모두 변경된 객체의 프로퍼티 값을 참조하게 된다. 
 객체는 참조(Reference) 방식으로 전달된다. *복사되지 않는다.*


``` Javascript
var foo = { val: 10 };
var bar = { val: 10 };

console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // false

var baz = bar;

console.log(baz.val, bar.val); // 10 10
console.log(baz === bar);      // true
```

 변수 foo와 변수 bar는 비록 내용은 같지만 별개의 객체를 생성하여 참조값을 할당하였다. 
 따라서 변수 foo와 변수 bar의 참조값 즉 어드레스는 동일하지 않다. 
 변수 baz에는 변수 bar의 값을 할당하였다. 
 결국 변수 baz와 변수 bar는 동일한 객체를 가리키는 참조값을 저장하고 있다. 따라서 변수 baz와 변수 bar의 참조값은 동일하다.


  + 문제

  ``` Javascript
function changeAgeAndReference(person) {
	person.age = 25;
	person = {
		name: 'John',
		age: 50
    };
	return person;
}

var personObj1 = {
	name: 'Alex',
	age: 30
};

var personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?
```
 

## 객체 메소드 ( Object Methods )

 메소드란?
 
 + 객체에서 수행할 수 있는 작업
 + 함수정의를 포함하는 속성
 + 객체 속성으로 저장되는 함수 등

 메소드는 화살표 표현식이나 단축 문법을 사용해 표기할 수 있다.
 객체 메소드는 
 > objectName.methodName(arguments)
 식으로 호출된다.


``` Javascript
const engine = {
  // method shorthand, with one argument
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`);
  },  
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log('The engine sputters...');
  },
};

engine.start('noisily');
engine.sputter();

/* Console output:
The engine starts up noisily...
The engine sputters...
*/
```

 사실 함수의 연장선...

## 단축 표현

``` Javascript
const rubiksCubeFacts = {
  possiblePermutations: '43,252,003,274,489,856,000',
  invented: '1974',
  largestCube: '17x17x17'
};
const {possiblePermutations, invented, largestCube} = rubiksCubeFacts;
console.log(possiblePermutations); // '43,252,003,274,489,856,000'
console.log(invented); // '1974'
console.log(largestCube); // '17x17x17'
```

``` Javascript
const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }
```
 프로퍼티 키 없이 값 만가지고도 객체를 만들 수 있다~ 

## this

 - this의 값은, 함수에 사용될 때, 함수를 '소유'하는 객체
 - this는 변수가 아니다. 키워드로 볼 수 있다. this의 값을 변경할 수 없더
 - 일반 함수는 함수를 선언할 때 this에 바인딩 할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출 할 때 함수가 어떻게 호출 되었는지에 따라 동적으로 결정된다.

this 이용 사례 1, 

``` Javascript
const cat = {
  name: 'Pipey',
  age: 8,
  whatName() {
    return this.name  
  }
};

console.log(cat.whatName()); 
// Output: Pipey
```

this 이용 사례 2, 

``` Javascript
const restaurant = {
  numCustomers: 45,
  seatCapacity: 100,
  availableSeats() {
    // this refers to the restaurant object
    // and it's used to access its properties
    return this.seatCapacity - this.numCustomers;
  }
}

```
 객체 내부에 정의된 함수의 경우, 'this'는 객체 자체를 가리킨다. 
 객체 외부에서 정의된 함수의 경우, 'this'는 전역 객체(브라우저의 전역)를 가리킨다.

 ### 단,
 자바스크립트의 화살표 함수는 함수를 선언할 때, this에 바인딩할 객체가 정적으로 결정된다. 일반 함수와는 달리 언제나 상위 스코프의 this를 가리킨다.
 이를 'Lexical this'라고 한다.

``` Javascript
const myObj = {
    data: 'abc',
    loggerA: () => { console.log(this.data); },
    loggerB() { console.log(this.data); },
};

myObj.loggerA();    // undefined
myObj.loggerB();    // 'abc'

```
 

 참조 : https://poiemaweb.com/es6-arrow-function


## 접근자 프로퍼티

 - 객체의 프로퍼티를 가져오는 함수
 접근자란 객체 지향 프로그래밍에서 객체가 가진 프로퍼티 값을 객체 바깥에서 읽거나 쓸 수 있도록 제공하는 메서드를 말합니다.(잘 안쓰다고 한다.)
 

 ### 1.getter(획득자)


``` Javascript
//1)
let obj = {
 get propName() {
   // getter, obj.propName을 실행할 때 실행되는 코드
 },

//2)
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smith
```

 - getter 메서드는 obj.propName을 사용해 프로퍼티를 읽으려고 할 때 실행된다.
 - 접근자 프로퍼티를 사용하면 함수처럼 호출 하지 않고, 일반 프로퍼티에서 값에 접근하는 것처럼 평범하게 user.fullName을 사용해 프로퍼티 값을 얻을 수 있다.

 ### 2.setter(설정자)

``` Javascript
set propName(value) {
   // setter, obj.propName = value를 실행할 때 실행되는 코드
 }
};
```

 - setter 메서드는 obj.propName = value으로 프로퍼티에 값을 할당하려 할 때 실행된다.


 왜? 언제? 사용하는가?


## 팩토리 함수 ( factory functions )

 여러 조합을 이용해 함수를 생성하는 방식

``` Javascript
// A factory function that accepts 'name', 
// 'age', and 'breed' parameters to return 
// a customized dog object. 
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log('Woof!');  
    }
  };
};
```

 상속과 같은 개념을 팩토리 조합으로 표현할 수 있다.
 생성자 함수와 다른 점은? 기능은 같으나, 표현식이 다른 것인가?
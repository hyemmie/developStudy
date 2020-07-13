# Higher-order Functions (고차함수)

## Functions as data

```javascript
const announceThatIAmDoingImportantWork = () => {
  console.log("I’m doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;
const busy2 = announceThatIAmDoingImportantWork;

busy(); // const지만 함수이기 때문에 busy; 아닌 busy();
```

자바스크립트 함수는 모든 data type처럼 행동할 수 있다. 함수를 변수에 선언하거나 또 다른 변수에 다시 선언하는 것 또한 가능하다.

## Functions as parameter

```javascript
const timeFuncRuntime = (funcParameter) => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);
```

자바스크립트 함수는 모든 data type이 될 수 있으므로, 한 함수가 다른 함수의 parameter가 되는 것도 가능하다.

# Iterator

array의 element들을 조작하고 리턴하는 내장 메서드

## .forEach()

```js
const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below
fruits.forEach((fruitItem) => console.log("I want to eat a " + fruitItem));
```

.forEach()는 array의 모든 요소들에 대해 callback function을 수행하는 메서드.

callback function : 다른 함수가 실행된 후에 실행되는 함수. 이 때문에 다른 함수(고차함수)의 인자로 쓰일 수도 있고, 어떤 함수(고차함수)에 의해 리턴될 수도 있음.
인자에 해당하는 함수가 callback function,

위 코드의 경우 .forEach 메서드가 실행된 이후 인자인 (fruitItem => console.log('I want to eat a ' + fruitItem)); 이 차례차례 실행되므로 callback function에 해당한다.

## .map()

```js
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below
const secretMessage = animals.map((animal) => {
  return animal[0];
});
// animal이 아닌 anyname을 사용해도 정상적으로 출력되는 것으로 보아 element 이름은 자유롭게 설정 가능

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map((number) => {
  return number / 100;
});
```

.map() 메서드는 callback function을 인자로 하여 새로운 array를 리턴한다.

특정 array의 element들을 간단하게 조작하여 새로운 array를 생성할 때 사용하며, 기존 array에는 변형을 가하지 않는다.

## .filter()

```js
const words = ["chair", "music", "pillow", "brick", "pen", "door"];

const shortWords = words.filter((word) => {
  return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
```

.filter() 메서드도 .map() 메서드와 마찬가지로 새로운 array를 리턴한다.

return 뒤에 조건을 넣어주면 true에 해당하는 element들만 새로운 array에 담기고, 마찬가지로 기존 array에는 변형을 가하지 않는다.

## .findIndex()

```js
const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex((num) => {
  return num < 10;
});

console.log(lessThanTen); // 3만 리턴
```

.findIndex() 메서드는 callback function에서 true를 리턴하는 첫 번째 element의 index를 리턴한다.

따라서 위 코드의 경우 callback function에서 true를 리턴하는 element는 5, 9로 총 2개지만 콘솔에 lessThanTen을 찍어보면 5의 index인 3만 리턴된다.

## .reduce()

```js
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
});

console.log(newSum);

/*Output : 
The value of accumulator:  1
The value of currentValue:  3
The value of accumulator:  4
The value of currentValue:  5
The value of accumulator:  9
The value of currentValue:  7
16
*/
```

.reduce() 메서드는 callback function의 반복을 통해 다른 메서드들과 다르게 최종적으로 새로운 array가 아닌 하나의 값을 리턴한다.

callback function은 두 개의 parameter를 가지며, 위 코드에서는 각각 accumulator, currentValue라는 이름을 가지고 있다.

첫 번째 parameter는 array의 첫 번째 element, 두 번째 parameter는 두 번째 element를 받고 한 번의 callback function 실행을 통해 리턴된 값은 다시 첫 번째 parameter(여기서는 accumulator)가 된다.

두 번째 parameter는 iteration이 진행됨에 따라 자연스럽게 변화한다. (두 번째 element부터)

```js
const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100); // <- Second argument for .reduce()

console.log(summedNums); // Output: 117
```

.reduce() 메서드는 추가적인 parameter를 가질 수 있다. (기본 parameter는 callback function 자체)

위 코드의 경우 callback function과 100이 .reduce()의 parameter에 해당한다.

이 추가적인 parameter의 경우 initial accumulator의 값을 특정하고, array의 첫 번째 element인 1의 경우 currentValue에 대응되며 그 이후는 동일하게 진행된다.

## .some(), .every()

```js
const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below

console.log(
  words.some((word) => {
    return word.length < 6;
  })
); //output : true

// Use filter to create a new array
const interestingWords = words.filter((word) => {
  return word.length > 5;
});

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
); /// output : true
```

.some()은 callback function을 통해 리턴된 값 중 true가 단 하나라도 있으면, 즉 array에 조건을 만족시키는 element가 하나라도 존재하면 true를 반환한다.

.every()는 모든 element가 조건을 만족해야 true를 반환한다.

# 5. Array (배열)

  



## 5.1  Array란?

* Array 는 파이썬의 리스트와 비슷 (그러나 미묘하게 다르다!)
* **다수의 데이터**를 저장하고 처리하기 위해 사용한다.  (심지어 함수도 들어갈 수 있다!)

#### Array 의 선언법

```javascript
let jsArray = ['a', 1, 'storage']   //기본적인 방법

let jsArray = Array('a', 1, 'storage')   //이 방법도 가능하다!
let jsArray = new Array('a', 1, 'storage')

let jsArray = []   //빈 Array를 선언할 수도 있다
let jsArray = Array()
```
  
  
## 5.2  Array 의 인덱스

![](https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-arrays/array+indices.svg)

```javascript
const jsArray = [ 'a', 'b', 'c', 'd', 'e' ]
//jsArray[0] = 'a' 
//jsArray[1] = 'b' 
//... 
//jsArray[4] = 'e'  
```

* 인덱스는 순서대로 [0] [1] [2] ...  
* 첫번째가 [0] 부터 시작한다. 
* **1부터 시작하는 것이 아님에 주의!**
   
#### 참고. Python과의 차이!
* 자바스크립트에는 [-1] 인덱스가 존재하지 않는다.
```javascript
//javascript
let jsArray = ['a', 'b', 'c']
console.log(jsArray[-1])  //Error!!
```
```python
# python
pyArray = ['a', 'b', 'c']
print(pyArray[-1])  # 'c' 출력
```
  
  
## 5.3  let 과 const의 차이?

* **var**   :  mutable, 재선언 가능,    재할당 가능    
* **let**   :  mutable, 재선언 **불가능**, 재할당 가능 
* **const** :  mutable, 재선언 **불가능**, 재할당 **불가능**

```javascript
let letArray = ['a', 'b', 'c']  	//재선언 불가능, 재할당 가능 

letArray[2] = 'd'			//mutable, 결과: ['a', 'b', 'd']
let letArray = [1, 2, 3]		//재선언! Error!!
letArray = [1, 2, 3]			//재할당, 결과: [ 1, 2, 3 ]
```

```javascript
const constArray = ['a', 'b', 'c']	//재선언 불가능, 재할당 불가능

constArray[2] = 'd'			//mutable, 결과: ['a', 'b', 'd']
const constArray = [1, 2, 3]   		//재선언! Error!
constArray = [1, 2, 3]			//재할당! Error!
```
​    *mutable 이란 Array 의 element 하나하나를 바꾸는 것은 가능하다는 뜻
  
  
## 5.4  Array 의 길이 
* Array의 길이를 구할때는 .length 를 이용한다.
```javascript
let jsArray = [ 'a', 'b', 'c', 'd', 'e' ]
console.log(jsArray.length)	// 5
```
  
#### 참고. Python과의 차이!
```javascript
//javascript
let jsArray = ['a', 'b', 'c']
console.log(jsArray.length)  // 3
```
```python
# python
pyArray = ['a', 'b', 'c']
print(len(pyArray))  # 3
```
   
  
## 5.4  여러가지 method

**요소 추가**

* push :  Array 의 맨 마지막에 요소를 추가

```javascript
let jsArray = ['a', 'b', 'c', 'd']
jsArray.push('e', 'f')
// jsArray = ['a', 'b', 'c', 'd', 'e', 'f']
```

* unshift :  Array 의 맨 처음에 요소를 추가

```javascript
let jsArray = ['a', 'b', 'c', 'd']
jsArray.unshift('A', 'B')
// jsArray = ['A', 'B', 'a', 'b', 'c', 'd']
```

  

**요소 제거**

* pop :  Array 의 맨 마지막 요소를 제거

```javascript
let jsArray = ['a', 'b', 'c', 'd']

let popped = jsArray.pop()  
// popped = 'd'
// jsArray = ['a', 'b', 'c']

jsArray.pop()  
// jsArray = ['a', 'b']
```

* shift :  Array 의 맨 처음 요소를 제거

```javascript
let jsArray = ['a', 'b', 'c', 'd']
let shifted = jsArray.shift()
//  shifted = 'a'
//  jsArray = ['b', 'c', 'd']

jsArray.shift()
//  jsArray = ['c', 'd']
```

  

* join :  Array의 요소들을 이어붙여 문자열로 반환

```javascript
let jsArray = ['a', 'b', 'c', 'd']
console.log(jsArray.join())  	// a,b,c,d
console.log(jsArray.join(''))	// abcd
console.log(jsArray.join('-'))	// a-b-c-d
```
  
* slice :   Array 에 범위를 지정해 잘라낸다. 	**slice(시작index, 끝index)** 

```javascript
let jsArray = ['a', 'b', 'c', 'd', 'e']
let x = jsArray.slice(2)	//[2] 부터 끝까지    x = ['c', 'd', 'e']
let y = jsArray.slice(2,4)	//[2] 이상 [4] 미만  y = ['c', 'd']
```
  
* splice :  요소를 Array내의 특정 index 앞에 insert 하거나, replace한다

  splice( index,  **0 or 1**,   Element )

  0이면 insert, 1이면 replace

```javascript
let jsArray = ['a', 'b', 'c', 'd']

jsArray.splice(1, 0, 'B') 
// jsArray = ['a', 'B', 'b', 'c', 'd']

jsArray.splice(1, 0, 'C') 
// jsArray = ['a', 'C', 'b', 'c', 'd']
```
  
* concat :  두개의 Array를 붙인다.

```javascript
let jsArray1 = ['a', 'b', 'c', 'd']
let jsArray2 = ['e', 'f', 'g', 'h']

let jsArray3 = jsArray1.concat(jsArray2)
// jsArray3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
```
  
* indexOf : 해당 요소의 인덱스를 반환

```js
let jsArray = ['a', 'b', 'c', 'd']

let index = jsArray.indexOf('c')
// index = 2

let index = jsArray.indexOf('e')
// index = -1  (없으면 -1 을 반환한다)
```
  
더 많은 methods 는 아래의 링크에서.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  
  
## 5.5  Array 와 함수

* 함수의 입력으로 Array를 받는 경우

```js
let jsArray = ['a', 'b', 'c', 'd']

function addE(arr) {
    arr.push('e')
}
addE(jsArray)	//jsArray = ['a', 'b', 'c', 'd', 'e']
```
  
* Array 의 요소로 함수를 받는 경우

```js
const func1 = function () {
  console.log('output1')
}

function func2 () {
  console.log('output2')
}

const func3 = () => {console.log('output3')}

let funcArray = [func1, func2, func3];
console.log(funcArray)
// [ [Function: func1], [Function: func2], [Function: func3] ]

funcArray[1]()
// output2
```
  
  
## 5.6  Nested Array (다차원 배열)

* 양파 껍질 인덱스

```js
const jsArray = [[1,2], [3,4], [5,6]]
// 3은 어디에 있지?
// 2번째 요소의 1번째 항!
// jsArray[1][0]

console.log(jsArray[1][0])	// 3
```
# Promise	

### 자바스크립트의 비동기 처리

'특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행'

ex) 세탁기 돌려두고 방청소하기

### setTimeout()

```js
function delayedFunction() { console.log('print') };  //일반적인 함수 호출
const delayedFunction = () => { console.log('print') };  //화살표 함수 호출

setTimeout(delayedFunction, 2000);  //해당 함수를 2초 뒤에 실행 
```

Node API 중 하나, 밀리초 단위로 멈춘다

왜배우는가? 프로미스 체크하려고

```js
console.log('1')

setTimeout(function(){
	console.log('2')
}, 2000)

 setTimeout(function(){
    console.log('3') 
}, 1000)

console.log('4')
```

- **동기식이면:**     (시작) - 1 - (2초 후) 2 - (1초 후) 3 - 4  

- **비동기식이면:** (시작) - 1 -  4 - (시작 후 1초) 3 - (시작 후 2초) 2

비동기 처리의 **장점**: 코드의 실행 속도가 빨라진다. (느린 작업은 백그라운드에서 처리하므로)

비동기 처리의 **단점**: 데이터를 받아서 화면에 표시할 때, 데이터를 다 받지도 않았는데 다음 코드가 실행되어 빈 값을 출력할 수 있다. 이를 해결하기 위해 순차적으로 코드를 시행하는 동기식 처리를 사용한다.

**동기식 처리 방법**

- 콜백함수 (콜백 지옥에 빠질 수 있다!)
- Promise 사용
- async await



### Promise

프로미스는 자바스크립트 비동기 처리에 사용되는 객체

**Promise 의 세가지 상태**

- Pending(대기): 비동기 처리 로직이 아직 완료되지 않은 상태
- Fulfilled(이행):  비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- Rejected(실패): 비동기 처리가 실패하거나 오류가 발생한 상태



#### Pending

```js
new Promise();
```

호출하면 pending 상태, Promise 안에는 콜백 함수를 선언할 수 있다.

#### Fulfilled

```js
new Promise(function(resolve, reject){
    resolve();
})
```

콜백함수의 인자 resolve 를 실행하면 fulfilled 로 상태가 바뀐다. 

#### Rejected

```js
function getData(){
    new Promise(function(resolve, reject){
        reject(new Error("bad request"));
    })	
}

getData().then().catch(function(err){
    console.log(err)  //Error: bad request
})
```

콜백함수의 인자 reject 를 실행하면 rejected 로 상태가 바뀐다. 이 때 catch() 로 실패한 이유를 받을 수 있다.



```js
const executorFunction = (resolve, reject) => { 
    if (someCondition) {
        resolve('I resolved!');
	} else {
        reject('I rejected!'); 
    }
};
const myFirstPromise = new Promise(executorFunction);  //선언하는 순간 실행
```



`.then()` 은 언제나 promise 를 반환한다. 자신을 호출한 것과 같은 상태를 반환

```js
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);
```



### Promise Chaining

```js
new Promise(function(resolve, reject){
  setTimeout(function() {
    resolve(1);
  }, 2000);
})
.then(function(result) {
  console.log(result); // 1
  return result + 10;
})
.then(function(result) {
  console.log(result); // 11
  return result + 20;
})
.then(function(result) {
  console.log(result); // 31
});
.catch(function(result){
    console.log(result)
    return result
})
```

- Fulfilled 가 되면 다음 `.then()`으로 넘어간다.

- Rejected가 되면 다음 `.catch()`로 넘어간다.

```js
new Promise((resolve, reject) => {
    console.log('Initial');
    reject();
})
.then(() => {
    console.log('Do this');
    reject();
})
.then(() => {
    console.log('catch?');
})
.catch(() => {
    console.log('Do that');
     resolve();
})
.then(() => {
    console.log('whatever happened before');
})
.then(() => {
    console.log('whatever happened before');
})
.catch(() => {
    console.log('exception2')
})
```





### 자주 저지르는 실수!

1. nesting than chaining
2. return 까먹음 



### promise.all()

- 어레이를 인풋으로 받는다

- 안에 들어간 것들을 동시에 실행

- 하나라도 rejected 되면, 첫 번째 rejected 된 프로미스의 반환값을 반환한다.

```js
let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
```

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```



### 핵심은 then catch 로 콜백 지옥을 탈출하는 것!


```js
콜백 사용
function first(callback) {
    console.log('1')
    callback()
}
function second(callback) {
    setTimeout(function(){
    console.log('2')
    callback()
    }, 2000)   
}
function third(callback) {
    setTimeout(function(){
    console.log('3')
    callback()
    }, 1000)
}
function fourth() {
    console.log('4')
}

first(function(){
    second(function(){
        third(function(){
            fourth()
        })
    })
})
```
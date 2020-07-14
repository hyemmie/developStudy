Loop
==================
<br>

- 어떤 과정을 여러번 되풀이할 필요가 있을 때 사용
- *iteration* : 반복을 뜻하는 용어 

--- 


## 1. For statement (for 문)

- *initialization*(초기문) : 루프문에 사용될 인덱스를 선언하고 초기화 해주는 영역 

- *stopping condition*(조건문) : 루프문이 종료되는 조건을 명시해주는 영역 -> **무한 루프**가 일어나지 않도록 주의! --> 조건문은 최종적으로 Boolean 값으로 변경 (참이면 true / 거짓이라면 false)

- *iteration statement*(증감문) : 루프문이 새롭게 반복될 때마다 발생하는 업데이트를 명시하는 영역 -> 주로 인덱스 증감식 사용

```javascript
// structure of 'For statement'

for (initialization; stopping condition; iteration statement) {
    codes
}

// example of 'For statement'

for (let i = 0; i < 10; i++) {
    console.log(i);
} 

for (let i = 10; i >= 0; i--) {
    console.log(i);
}
```

- `for`문의 작동 순서에 주의! : 초기화 -> 조건 검사 -> 코드 실행 -> 인덱스 증감 -> 조건 검사 -> 코드 실행 ....... <br> <br>

- 배열 등 여러 요소를 가진 자료형을 순환하는데도 유용하게 사용한다. (이렇게 사용할 경우 배열의 길이를 *stopping condition*으로 사용하는 경우가 많음!)

```javascript
const animals = ['dog', 'cat', 'cow']

for (let i = 0; i < animals.length; i ++) {
    console.log(animals[i]);
}
```


### Nested Loops (다중 for문)

- for문 안에 for문, 그 안에 또 다른 for 문, 그 안에 또 다른 for문 ..... 
```javascript
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
/* OUTPUT
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
    .
    .
    .   */
```
- 각 for문마다 서로 다른 인덱스를 설정하도록 주의!
<br>

---

## 2. While loop (while 반복문)

- `for` 문에 `()` 사이에 한번에 명시했던 3가지 표현식(*initialization* / *stopping condition* / *iteration statement*)을 분리

```javascript
// structure of 'While Loop'

initialization
while (stopping condition) {
    codes
    iteration statement
}

// example of 'While Loop'

let counterTwo = 1;
while (counterTwo < 4) {
    console.log(counterTwo);
    conterTwo++;
}
```
- 루프문이 종료될 수 있도록 증감문을 넣어주는 것이 중요
<br>

---

## 3. Do..While statements

- 기본적으로 `while`문과 동일하지만 '조건 검사 -> 코드 실행'이 아니라 코드 먼저 실행하고 조건 검사하는 반복문 **최소한 한 번**은 반복문이 실행된다.

```javascript
let dice = 0;
let cnt = 0;

do {
    cnt++;
    dice = Math.floor(Math.random() * 6 + 1);
} while(dice != 6)

console.log(cnt);
```

>`for` vs `while` vs `do...while`
> 1. `for` : 반복의 횟수가 정해져 있을 때 사용 ex) 배열 순환   
> 인덱스 초기화 -> 조건 검사 -> 코드 실행 -> 증감문 -> 조건 검사 -> 실행 -> ......
> 2. `while` : 횟수보다는 '조건이 만족' 될 때까지 반복 ex) 파일 읽기   
> 인덱스 초기화(루프 이전에) -> 조건 검사 -> 코드 실행(증감문 포함) -> 조건 검사 -> ....
> 3. `do...while` : `while` 문을 사용할 때, 적어도 한 번의 반복은 실행하고 싶다면 선택   
> 인덱스 초기화(루프 이전에) -> 코드 실행(증감문 포함) -> 조건 검사 -> ....

<br>

---

## 4. break / continue;

### break

- `switch` 문에서 등장
- 루프문에서는 주로 `if` 문과 함께 사용되며, `break` 키워드를 만나면 나머지 코드는 실행되지 않고 **가장 가까운** 반복문을 빠져나간다. 이 때, 남아있는 코드들은 실행되지 않는다.

```javascript
let dice = 0;

while(1) {
    dice = Math.floor(Math.random() * 6 + 1);
    if (dice === 6) {
        console.log('Stop');
        break; 
    }
    console.log('Try again'); // break를 만났을 경우 이 코드는 실행되지 않고 프로그램 종료
}
```
<br>

### continue

- `break`와 함께 알아두면 좋은 개념!
- 마찬가지로 주로 if문과 함께 사용되며 `continue` 키워드를 만나면 나머지 코드는 실행되지 않고 조건 검사식으로 되돌아 간다!
> 이때, for문이라면 증감문을 실행하고 조건 검사식으로 넘어가지만 while 문은 증감문이 루프문의 실행 코드 내에 존재하기 때문에 `continue` 밑에 증가문이 존재한다면 무한루프가 발생할 수도 있다!

```javascript
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}


// infinite loop

let num = 0;

while(num < 10) {
    if (num % 2 == 0) continue; // continue를 만난 경우 아래 코드는 실행되지 않고 곧바로 조건 검사식으로!
    num++;
    console.log(num);
}
```
- `break`와 `continue`는 삼항 연산자와는 사용할 수 없다 ex) `x > 3 ? break : continue;` 불가! 

---

```javascript
var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function() {
    console.log("My value: " + i);
  };
}

for (var j = 0; j < 3; j++) {
  funcs[j]();
} // Output : 3 3 3
```

- 인덱스 변수를 `var`로 선언해줄 경우 그 변수의 메모리는 for 문이 끝날 때까지 유지된다. 따라서 최종적으로 `i == 3`의 값을 갖게 되는데, 이 때 `console.log("My value: " + i);`의 i는 var 변수를 **참조**하므로 모든 출력이 `My value: 3`으로 나온다.
- 의도했던 값을 출력하기 위해서는 인덱스 변수 i를 `let`으로 선언해주어야 한다.
> `let`으로 선언된 변수는 for 문이 새로 돌 때마다 저장 공간이 다시 할당된다. (근데 그러면 새롭게 반복할 때마다 참조할 메모리가 사라진다는 문제가 생긴다. 아마 let으로 선언되어서 다른 오브젝트에 값으로 할당될 때는 메모리의 *참조*가 아니라 *값의 전달*이 일어나는 게 아닐까?)

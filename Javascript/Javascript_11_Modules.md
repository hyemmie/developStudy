# Modules

## 모듈을 사용하는 이유

1. 코드를 찾고, 수정하고, 디버깅하기 용이하다.
2. 이미 쓰여있는 로직을 앱의 다른 부분에서 재사용할 수 있다. 
3. 다른 모듈에게서 정보를 은닉하고 보호할 수 있다.
4. 전역변수들로 인한 충돌을 막을 수 있다.    -> 다른 모듈에서 같은 이름을 가져왔을 때?

## export

1. 기본적인 모듈 export 방법
``` js
let Airplane = {};

Airplane.myAirplane = "StarJet";

module.exports = Airplane;
```
\
\
2. export 축약문 (export하는 동시에 변수/함수 선언)
``` js
let Airplane = {};

module.exports = {
  myAirplane: "CloudJet", 
  displayAirplane: function() {
    return this.myAirplane;
  }
};
```
\
\
3. export default (ES6에서 지원하는 더 유연하고 가독성 높은 문법)
``` js
function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
    } else {
    return false;
  }
};

export default meetsSpeedRangeRequirements;
```
ES6에서는 대부분 export default를 사용하고, Node.js는 export default를 지원하지 않기 때문에 위의 module.exports를 사용한다.
\
\
\
4. named export (export default와 마찬가지로 ES6에서 지원하는 더 유연하고 가독성 높은 문법)
``` js
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 

export { specialty, isVegetarian };
```
named export 방법의 경우 ``` module.exports = Airplane; ``` 처럼
모듈 오브젝트의 프로퍼티를 추가하는 것이 아니라 export할 오브젝트가 독자적인 변수로 저장된다.
\
\
\
5. export named export : 오브젝트를 선언하면서 export하기 (ES6에서 지원)
``` js
export let specialty = '';
export function isVegetarian() {
}; 
function isLowSodium() {
}; 
```
변수나 함수를 선언하면서 export 키워드를 적어준다. 마지막의 export 코드는 사용할 필요가 없다.
\
\
\
6. export as : 이름을 바꿔서 export하기
``` js
let specialty = '';
let isVegetarian = function() {
}; 
let isLowSodium = function() {
}; 

export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };
```
as 키워드를 사용하여 import된 문서에서 사용될 이름을 설정한다.
import할 때는 새로운 이름으로 불러와야 한다.
\
\
\
7. combining export statements
``` js
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
function isGlutenFree() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;
```



``` js
export let Menu = {};

export let specialty = '';
export let isVegetarian = function() {
}; 
export let isLowSodium = function() {
}; 
let isGlutenFree = function() {
};

export default isGlutenFree;
```
named export와 default export의 혼용은 피하는 것이 좋지만, 가끔 유용한 경우도 있다.

\
\

## require

1. 기본적인 require 방법
``` js
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();
```


## import (ES6에서 지원)

ES6에서는 모듈을 가져올 때 import 키워드를 제공한다.

1. 기본적인 import 방법
``` js
import meetsSpeedRangeRequirements from './airplane';
```
import + 가져올 모듈 이름 + from + 모듈이 로드될 파일
import의 경우 require와는 다르게 확장자 없이 모듈을 가져올 파일의 이름만 적으면 된다.
\
\
\
2. named import (ES6에서 지원)
``` js
import { specialty, isVegetarian } from './menu';
```
기본적인 import 방법과 비슷하고, 가져올 모듈 이름들을 {}안에 넣어 불러온다.
\
\
\
3. import named import

export named export와 쌍을 이루기 위해 추가한 챕터인 것 같다 ㅎㅎ

export named export의 경우 변수/함수를 선언하면서 맨 앞에 export 키워드를 추가하고 추가적인 export 문은 사용하지 않는다는 차이가 있지만,
이렇게 export된 모듈을 import할 때에는 위의 named import 방법을 그대로 사용한다.
\
\
\
4. import as

export as로 다른 이름을 설정하여 export한 경우 그 이름으로 import해야 한다.
\
\
\
5. combining import statements
``` js
import { specialty, isVegetarian, isLowSodium } from './menu';

import GlutenFree from './menu';
```

``` js
export let availableAirplanes = [
{name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 maxSpeed: 1200,
 minSpeed: 300
}, 
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200
}
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
    } else {
    return false;
  }
};

export default meetsSpeedRangeRequirements;
```

export default로 export한 모듈을 named import로 가져올 경우 오류가 난다.

-> export default는 하나만 할 때

``` js
import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirement } from './airplane'; // TypeError

import {availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';
import meetsSpeedRangeRequirements from './airplane'; // 오류 없음
```
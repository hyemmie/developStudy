# HTTP messages

서버와 클라이언트 간에 데이터가 교환되는 방식이다. *요청(request)* / *응답(response)* 의 두 가지 방식으로 이루어져있다. <br>

- HTTP(HyperText Transfer Protocol) : 서버와 브라우저가 어떻게 데이터(하이퍼 텍스트)를 주고 받을 수 있는지에 대한 규약. <br><br>

#### *요청(request)* : 클라이언트가 서버로 전달해서 서버의 액션이 일어나게끔 하는 메시지   
    

|HTTP Method|설명|
|---|----|
|GET|url에 정보를 담아 보내게 되는데, 데이터를 보낼 때 권장되는 방법은 아님 (URL뒤에 ?가 생기면서 파라미터들이 붙는데 이를 쿼리스트링이라 함) / 정보를 추출하거나 얻을 때 사용|
|POST|서버로 정보를 보내고 특정 작업을 수행할 수 있다.|
|PUT|요청 페이로드를 사용해 새로운 리소스를 생성하거나, 대상 리소스를 나타내는 데이터를 대체합니다. 자원내 모든 필드 영역 필요(전체수정을 의미)|
|DELETE|지정한 리소스 삭제|
|PATCH|부분교체, 자원내 일부 필드 영역 필요|

<br>

자바스크립트의 XHR 오브젝트를 활용하여 GET, POST *request*를 만들 수 있다.
> - AJAX(Asynchronous JavaScript And XML) : HTTP를 이용하여 서버와 통신하는 방법으로 XMLHttpRequest 객체를 사용한다. JSON, XML, HTML 그리고 일반 텍스트 형식 등을 포함한 다양한 포맷을 주고 받을 수 있다. AJAX의 강력한 특징은 페이지 전체를 리프레쉬 하지 않고서도 수행 되는 "비동기성"이고 이러한 비동기성을 통해 사용자의 Event가 있으면 전체 페이지가 아닌 일부분만을 업데이트 할 수 있게 해준다.
> - XHR(XMLHttpRequest) :  AJAX 요청을 생성하는 JavaScript API입니다. XHR의 메서드로 브라우저와 서버간의 네트워크 요청을 전송할 수 있다. 
> - JSON(JavaScript Object Notation) : {key: value} 형식으로 구성된 데이터 포맷의 한 형식
>  > 1. 프로그램 언어나 사용되는 플랫폼에 상관없이 사용할 수 있다.
>  > 2. 직렬화(serialize) : object -> string // `let json = JSON.stringify(obj)` 이때, 오브젝트의 메서드는 변환되지 않는다.
>  > 3. deserialize : string -> object // `const obj = JSON.parse(jsonObj)`  
>  > (https://www.youtube.com/watch?v=FN_D4Ihs3LE)

> 1. non-blocking properties :  '비동기로 처리했다' 라는 말을 주로 사용하는데 이는 수행하고자 하는 작업이 '논블로킹'임을 내포하는 한다.  blocking vs non-blocking (https://siyoon210.tistory.com/147)
> 2. asynchronous
> 3.  event loop : 비동기적 함수 호출을 관리. 프로그램이 실행되면 함수호출은 콜 스택에 저장된다. 그리고 함수들은 별개의 큐에 보내진다. 콜 스택이 비게되면 큐에 있는 함수가 하나씩 콜 스택으로 옮겨져 실행된다. (https://www.zerocho.com/category/JavaScript/post/597f34bbb428530018e8e6e2)

-----

### XHR POST REQUEST

```javascript
// Information to reach API
const apiKey = 'a6ad6e42fc1b4614b99b42a011bbc59f';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE)   {
      renderResponse(xhr.response);
    }
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
```

- Information to reach API : 사용할 API의 키와 요청을 보낼 주소를 변수로 선언하는 섹션
- Some page elements : html 요소를 가져와 변수로 할당
- AJAX functions : XMLHttpRequest 객체를 활용하여 통신
    - `xhr.onreadystatechange = () ` : 오브젝트가 변경될 때마다 콜백함수가 실행된다. 
    - `xhr.readyState` : 오브젝트의 상태를 의미. 0 ~ 4의 숫자 중 하나로 반환되고 각각의 숫자마다 의미하는 상태가 있다. (ex. 4 : 데이터를 전부 받은 상태, 완전한 데이터의 이용 가능)
    - `XMLHttpRequest.DONE` : 상수 4로 정의되어있는 요청 상태 --> 데이터에 변화가 생기면(오브젝트가 변경되면) 그 데이터를 사용할 수 있는지 확인.
    - `xhr.open('POST', url)` : 데이터 초기화
    - `xhr.send` : 요청을 보냄. POST는 요청시 데이터를 전송하기 때문에 인자에 전송할 데이터를 넣어준다.
    - `xhr.setRequestHeader` : HTTP 요청 헤더의 값을 설정 open() 후, send() 전에 setRequestHeader() 를 호출해야합니다.
- Clear page and call AJAX functions : 새롭게 검색어를 입력하면, 이전 검색어의 결과를 없애고 통신 시작

---

### fetch() POST Requests

fetch() : XHR 객체를 이용하지 않고, 네트워크 통신을 하는 또다른 방식. `fetch(url, obj)`와 같이 사용하며 obj를 url로 보낸다는 의미이다. obj는 선택적 인자이며, 없으면 get으로 있으면 post로 기능한다. 함수가 실행되고 나면 성공하든, 실패하든 `Promise` 객체를 반환한다.

```javascript
// Information to reach API
const apiKey = 'a6ad6e42fc1b4614b99b42a011bbc59f';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url, {
    method: 'POST',
    headers : {
    'Content-type': 'application/json',
    'apikey': apiKey
    },
    body: data,
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => console.log(networkError.message))
  .then(jsonResponse => {
    renderResponse(jsonResponse);
  })
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
```

- AJAX functions : fetch api를 이용하여 서버와 통신
    - `fetch(url, {...})` : url로 전송할 데이터 오브젝트를 정의했다. 이곳에 통신 방식(`method`), 데이터 내용(`body`, `apikey`) 등의 정보를 기입한다.
    - `.then(response => {})` : `xhr.onreadystatechange = ()` 처럼 오류 처리를 해주는 함수 // 오류가 없다면 받아온 응답을 화면에 표시한다(`renderResponse(jsonResponse)`)
    - `.then` 을 이용하여 순차적으로 함수가 실행되도록 조작

---

### async POST Requests

앞서 `.fetch()` api가 `.then` 을 이용하여 비동기성을 관리하였다면, 이번에는 `async...await`와 `try{}... catch(error){}`를 이용하여 관리

```javascript
// information to reach API
const apiKey = 'a6ad6e42fc1b4614b99b42a011bbc59f';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
        'apikey': apiKey,
      }
    })
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch(error) {
    console.log(error);
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
```

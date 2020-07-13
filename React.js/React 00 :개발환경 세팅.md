리액트 개발에 필요한 도구 설치는 크게 3단계로 이루어짐

# 1. 노드 버전 매니저 (nvm) 설치 - 맥 기준

nvm은 node.js를 설치하거나 버전을 관리해주는 프로그램. 

nvm없이 node.js만 설치할 수도 있지만 설치 이후 버전 관리등을 위해 nvm 설치 후 nvm을 통해 node.js를 설치해주는 것이 좋다.

먼저 리액트 실습을 위한 로컬 폴더를 하나 파주고, 그 디렉토리로 들어간 후 터미널을 켜준다.

### 1. 설치
```
$ sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```
nvm 설치

### 2. 확인
```
$ nvm ls

-bash: nvm: command not found
```

### 3. 당황하지 않고
```
$ vi ~/.bash_profile
```
vi 에디터로

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```
위 코드가 있는지 확인

### 4. 재시작
```
$ source ~/.bash_profile
```

### 5. 확인
```
$ nvm ls
```

```
->       system
node -> stable (-> N/A) (default)
iojs -> N/A (default)
```



# 2. node.js 설치

### 1. 설치
```
$ nvm install 8.10.0
```

### 2. 확인
```
$ node -v 
// v8.10.0

$ npm -v 
// v5.6.0
```
홈페이지에서 제공하는 최신 버전은 12지만 현재 현업에서 가장 많이 사용하는 node.js의 버전이 8이고, 많은 라이브러리 또한 8 버전에 맞춰 개발되어 있으므로 일단 8버전 설치. 

이후에 업그레이드가 필요하다면 업그레이드 하도록 하자!

우리가 리액트를 공부하면서 node.js는 예제를 실행할 서버 용도로만 사용할 것이므로 아직 node.js의 버전 차이는 크게 중요하지 않으니 걱정하지 말자.





# 3. yarn과 create-react-app 설치

npm을 통해 yarn을 설치해준다(npm은 nvm을 설치하면 같이 설치되어 있음).

npm은 노드 패키지 매니저를 뜻하고, 자바스크립트 라이브러리를 관리해준다. python의 pip처럼 이해하면 된다.

yarn은 npm이 가지고 있던 속도, 보안 이슈들을 해결하여 업그레이드 된 매니저로, 요즘엔 npm보다 yarn을 많이 사용한다고 한다.

create-react-app은 리액트 프로젝트에 필요한 패키지들을 묶어 리액트 앱을 생성해주는 도구이다.


### 1. yarn 설치
```
$ npm install -g yarn
```

### 2. create-react-app 설치
```
$ yarn global add create-react-app 
```

### 3. create-react-app으로 리액트 앱 생성
```
$ create-react-app (앱 이름)
```
을 입력하면 리액트 앱이 생성된다.

(세미나에서 만들었던 feedpage, accounts등의 앱을 리액트에서는 이렇게 생성하는 것 같다..!)

### 4. 리액트 앱 구동
```
$ cd (앱 이름)

$ yarn start
```
크롬 브라우저를 통해 자동으로 구동된다.

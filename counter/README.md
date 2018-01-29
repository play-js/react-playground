# [React Counter](https://github.com/play-js/react-playground/counter)

## TIL(Today I Learned)

### `this.setState({ count: this.state.count++ }) // X` counting되지 않는 현상

#### 예제 코드
```js
handleClick = () => {
  this.setState({ count: this.state.count++ }) // X
  this.setState({ count: this.state.count + 1 }); // O
}
```

#### Console Log
```
Do not mutate state directly. Use setState()
```

#### 원인 및 분석
```js
this.setState({ count: this.state.count++ }) // X
```

위 [예제 코드](#예제-코드)를 보면 `this.setState({ count: this.state.count++ }) // X` 후위연산자를 이용해서 state을 직접 변경하려고 한다. 다음가 같은 코드 `this.setState({ count: this.state.count + 1 }); // O` 를 사용하면 변경된 새로운 state.count + 1된 값을 setState에 대입하므로 정상적으로 동작한다.

#### 요약
>[Console Log](#console-log) 그대로 state을 직접 변경하면 안된다.
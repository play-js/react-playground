import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  /**
   * 아래 문법은 currying 참고
   * Arrow Function을 이용하면 this.handleClick = this.handleClick.bind(this) 문법이 필요 없음.
   */
  handleClick = name => () => {
    if (name === "Up") {
      this.setState({ count: this.state.count + 1 });
    }
    else { // Down
      this.setState({ count: this.state.count - 1 });
    }
    /**
     * 위 코드를 주석 처리하고, 아래 코드도 실행해 보세요
     * 삼항 연산자 사용 가능
     */
    // this.setState({ count: name === "Up" ? this.state.count + 1 : this.state.count - 1 });
  }

  render() {
    return (
      // 하나 이상의 컴포넌트를 사용할 때는 <div /> 태그로 묶어줘야 함.
      <div>
        <span>{this.state.count} </span>
        <button onClick={this.handleClick("Up")}>Up</button>
        <button onClick={this.handleClick("Down")}>Down</button>
      </div>
    );
  }
}

export default Counter;
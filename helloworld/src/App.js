import React, { Component } from 'react';
import './App.css';
import Content from './components/Content';
import Content2 from './components/Content2';
import Counter from './components/Counter';

class App extends Component {
  // 컴포넌트가 처음 만들어질 때 실행
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    };

    this.updateCounter = this.updateCounter.bind(this);
  }

  //컴포넌트가 dom위에 만들어지기 전 실행
  componentWillMount() {
  }

  //컴포넌트 렌더링
  render() {
    return (
      <div className="App">
        <Content title={this.props.title}/>
        <Counter number={this.state.count} onUpdate={this.updateCounter}/>
        <Content2/>


        
      </div>
    );
  }


  updateCounter(value) {
    console.log(value);
    this.setState({count: value});
    console.log(this.state.count);
  }

  /**
   * 컴포넌트 만들어진 후, 첫 렌더링하고 실행됨
   * 보통 javascript 프레임웍 연동이나 setTimeout, ajax 처리 
   */
  
  componentDidMount() {
    // var _this = this;

    // setTimeout(function() {
    //   _this.setState({ msg: "love" });
    // },3000)
  }

  //컴포넌트가 prop을 새로 받았을 때 실행
  componentWillReceiveProps() {
  }

  //prop/state가 변경되었을 때, 리렌더링을 할지말지 정함
  shouldComponentUpdate() {
  }

  //컴포넌트 업데이트 전 실행
  componentWillUpdate(){
  }

  //컴포넌트 리렌더링 후 실행
  componentDidUpdate(){}

  //컴포넌트가 dom에서 사라진 후 실행
  componentWillUnmount() {}


}

App.defaultProps = {
  title : 'This is the counter!'
}

export default App;

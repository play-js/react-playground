import React from 'react';

class Counter extends React.Component {

    updateValue() {
        /**
         * 상위 App.js의 this.updateCounter를 props(onUpdate)로 넘겨 받음
         * App.js의 this.state.count를 props(number)로 넘겨 받음
         * this.updateCounter에서 setState를 통해 this.state.count값이 계속 변경됨
         */
        this.props.onUpdate(this.props.number+1);
    }

    constructor(props){
        super(props);
        this.state = {
            test : 0
        };

        this.updateValue = this.updateValue.bind(this);
    }

    render(){
        // 아래 this.props.number는 상위 App.js의 변경되는 this.state.count를 나타낸다.
        return (
            <div>
                <h1>{this.props.number}</h1>
                <button onClick={this.updateValue}>Count</button>
            </div>
        )
    }
}

export default Counter;
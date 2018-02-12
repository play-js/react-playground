import React from 'react';

class Counter extends React.Component {

    render(){
        // 아래 this.props.number는 상위 App.js의 변경되는 this.state.count를 나타낸다.
        return (
            <div>
                <h1>{this.props.number}</h1>

                <button onClick={this.props.decrement}>-</button>
                <button onClick={this.props.increment}>+</button>
            </div>
        )
    }
}

export default Counter;
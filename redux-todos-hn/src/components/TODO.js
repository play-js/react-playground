import React from 'react';

class Counter extends React.Component {

    state = {
        inputVal : 0
    }

    render(){
        let input;

        return (
            <ul>
                {/* <h1>{this.props.number}</h1>

                <button onClick={this.props.delete}>-</button>
                <button onClick={this.props.add}>+</button> */}
                <input ref={node => {
                    input = node;
                }} value={this.state.inputVal}/>
                <button onClick={this.props.add(input.value)}>ADD</button>

                <li id={this.props.id} className={this.props.completed}>{this.props.text}</li>
            </ul>
        )
    }
}

export default Counter;
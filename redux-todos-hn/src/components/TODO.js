import React from 'react';

class Counter extends React.Component {

    state = {
        inputVal: 0
    }

    render() {
        let input;
        console.log(this.props.add)

        return (
            <ul>
                {/* <h1>{this.props.number}</h1>

                <button onClick={this.props.delete}>-</button>
                <button onClick={this.props.add}>+</button> */}
                <input
                    ref={node => {
                        input = node;
                    }}
                    value={this.state.inputVal}
                    onChange={event => this.setState({ inputVal: event.target.value })}
                />
                <button onClick={() => this.props.add(this.state.inputVal)}>ADD</button>

                <li id={this.props.id} className={this.props.completed}>{this.props.text}</li>
            </ul>
        )
    }
}

export default Counter;
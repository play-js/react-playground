import React from 'react';

class Counter extends React.Component {

    render(){
        return (
            <ul>
                {/* <h1>{this.props.number}</h1>

                <button onClick={this.props.delete}>-</button>
                <button onClick={this.props.add}>+</button> */}
                <input type='text'></input><div onClick={this.props.add}>ADD</div>
                <li id={this.props.id} class={this.props.completed}>{this.props.text}</li>
                
            </ul>
        )
    }
}

export default Counter;
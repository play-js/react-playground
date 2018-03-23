import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal : "",
            todos: []
        };
    }

    handleClick = () => {
        this.props.add(this.state.inputVal);
    }

    handleChange = (e) => {
        this.setState({inputVal: e.target.value});
    }

    render(){
        let input;

        return (
            <ul>
                <input onChange={this.handleChange}/>
                <button onClick={this.handleClick}>ADD</button>

                <li id={this.props.id} className={this.props.completed}>{this.props.text}</li>
            </ul>
        )
    }
}

export default Counter;
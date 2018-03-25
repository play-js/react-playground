import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal : ""
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
            <div>
                <input onChange={this.handleChange}/>
                <button onClick={this.handleClick}>ADD</button>

                <ul>
                {
                    this.props.todos.map(({ text }, index) => (
                      <li key={index}>{text}
                      </li>
                        )
                    )
                }
                </ul>
            </div>
        )
    }
}

export default Counter;
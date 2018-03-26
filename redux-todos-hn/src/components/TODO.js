import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal : ""
        };
    }

    handleClick = (e) => {
        if (e.target.textContent === "ADD") {
            this.props.add(this.state.inputVal);
        } else {
            this.props.remove(e.target.getAttribute("id"));
        }
    }

    handleChange = (e) => {
        this.setState({inputVal: e.target.value});
    }

    render(){
        return (
            <div>
                <input onChange={this.handleChange}/>
                <button onClick={this.handleClick}>ADD</button>

                <ul>
                {
                    this.props.todos.map(({ text, id }, index) => (
                      <li key={index}>{text} 
                      <button id={id} onClick={this.handleClick}>REMOVE</button></li>
                        )
                    )
                }
                </ul>
            </div>
        )
    }
}

export default Counter;
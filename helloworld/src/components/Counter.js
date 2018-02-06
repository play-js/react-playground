import React from 'react';

class Counter extends React.Component {
    updateValue(){
        this.props.onUpdate(this.props.number+1);
        console.log(this.props.number);
    }
    // handleClick() {
    //     console.log(this.props.number);
    //     this.setState({
    //         test : this.state.test + 1
    //     });
    //     console.log(this.props.number);
    // }

    constructor(props){
        super(props);
        this.state = {
            test : this.props.number
        };
        this.updateValue = this.updateValue.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if (nextProps.number !== this.props.number) this.setState({ test: nextProps.number})

    }

    render(){
        return (
            <div>
                {/* <h1>{this.state.test}</h1> */}
                {/* <button onClick={this.handleClick}>Count</button> */}
                <h1>{this.props.number}</h1>
                <button onClick={this.updateValue}>Count</button>
            </div>
        )
    }
}

export default Counter;
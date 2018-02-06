import React from 'react';

class Content extends React.Component {
    render(){
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">{this.props.title}</h1>
                </header>
            </div>
        )
    }
}

export default Content;
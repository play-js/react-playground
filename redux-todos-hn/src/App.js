import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addTodo, removeTodo } from './actions/todo';
import Title from './components/Title';
import TODO from './components/TODO';

class App extends Component {
  // add = () => {
  //   this.props.dispatch({type: 'ADD'});
  // }
  // delete = () => {
  //   this.props.dispatch({type: 'DELETE'});
  // }

  render() {
    return (
      <div className="App">
        <Title title={this.props.title}/>
        <TODO/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // count: state.count
    id: 0,
    text: 'Javascript',
    completed: false
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: dispatch(input => addTodo(input)), 
    remove: dispatch(removeTodo())
  }
}

App.defaultProps = {
  title : 'TODO LIST!'
}

// export default connect(mapStateToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);

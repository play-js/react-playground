import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actions/todo";
import Title from "./components/Title";
import TODO from "./components/TODO";

class App extends Component {
  // add = () => {
  //   this.props.dispatch({type: 'ADD'});
  // }
  // delete = () => {
  //   this.props.dispatch({type: 'DELETE'});
  // }

  render() {
    const { add } = this.props;
    // console.log(add);

    return (
      <div className="App">
        <Title title={this.props.title} />
        <TODO add={add} /> // App의 add를 TODO의 add로 연결해줘야함
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // count: state.count
    id: 0,
    text: "Javascript",
    completed: false
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: () => dispatch(addTodo()),
    remove: () => dispatch(removeTodo())
  };
}

App.defaultProps = {
  title: "TODO LIST!"
};

// export default connect(mapStateToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);

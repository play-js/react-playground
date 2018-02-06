import { Todo } from 'components';
import { connect } from 'react-redux';
import { addTodo } from 'ducks/todoReducer';

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({
    addTodo: text => { dispatch(addTodo(text)) },
})
const TodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Todo);

export default TodoContainer;
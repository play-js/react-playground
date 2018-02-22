import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { App } from 'components/App';
import * as TodoActions from 'ducks/todos';

const AppContainer;

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
// import Counter from '../components'; // Same below
import { Counter } from '../components'; // Same above

// Same below
// const mapStateToProps = state => {
//     return {
//         state
//     };
// };
const mapStateToProps = state => ({ state }); // Same above

// Same below
// const mapDispatchToProps = dispatch => {
//     return {
//         onIncrement: count => { dispatch(increment(count)) },
//         onDecrement: count => { dispatch(decrement(count)) },
//     }
// }
// Same above
const mapDispatchToProps = dispatch => ({
    onIncrement: count => { dispatch(increment(count)) },
    onDecrement: count => { dispatch(decrement(count)) },
})

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default CounterContainer;
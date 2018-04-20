import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { counterSelectors, counterActions } from 'state/counter';

const Counter = ({ count, increment, decrement }) => {
  const onIncrement = () => increment();
  const onDecrement = () => decrement();
  return (
    <div>
      {count}

      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  count: counterSelectors.getCount(state)
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterActions.increment(10)),
  decrement: () => dispatch(counterActions.decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

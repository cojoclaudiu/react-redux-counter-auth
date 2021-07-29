import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, increaseBy, decrement, toggleCounter } from '../store/counterSlice';

export default function Counter() {
  const show = useSelector(state => state.counter.toggleCounter);
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();

  const incrementHandle = () => dispatch(increment());
  const increaseByHandle = () => dispatch(increaseBy(5));
  const decrementHandle = () => dispatch(decrement());
  const toggleHandle = () => dispatch(toggleCounter());

  return (
    <div>
      {show && <div>{counter}</div>}
      <div>
        <button onClick={incrementHandle}>Increment + 1</button>
        <button onClick={decrementHandle}>Decrement - 1</button>
        <button onClick={increaseByHandle}>Increase by 5</button>
        <button onClick={toggleHandle}>On/Off</button>
      </div>
    </div>
  );
}

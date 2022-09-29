import { useSelector, useDispatch } from 'react-redux';
import {increment, selectCount } from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>
        <span>{count}</span>
      </h1>
      
      <button
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  );
}

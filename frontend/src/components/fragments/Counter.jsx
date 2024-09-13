// src/components/Counter.js
import React from 'react';

const Counter = ({ qty, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center">
      <button onClick={onDecrement} className="bg-gray-200 px-2 py-1">-</button>
      <span className="mx-2 text-white">{qty}</span>
      <button onClick={onIncrement} className="bg-gray-200 px-2 py-1">+</button>
    </div>
  );
};

export default Counter;

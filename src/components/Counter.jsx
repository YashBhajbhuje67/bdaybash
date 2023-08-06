import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Counter = ({ setCountDownDone }) => {
  const [count, setCount] = useState(10);
  const nav = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    }, 1000);

    if (count === 0) {
      clearInterval(intervalId);
      setCountDownDone(true);
      nav('/giftbox');
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div className="flex items-center justify-center w-24 h-24 bg-blue-500 rounded-full text-white text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
      <div>{count}</div>
    </div>
  );
};

export default Counter;

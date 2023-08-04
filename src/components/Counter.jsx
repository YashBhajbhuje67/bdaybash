import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Counter = () => {
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
      nav("/giftbox");
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div className="flex gap-4 text-3xl border rounded-md w-fit p-4 px-6 absolute top-[45%] left-[45%] ">
        <div>{count}</div>
        <div>Seconds</div>
    </div>
  );
}

export default Counter
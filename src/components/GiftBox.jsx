import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import giftImage from '../assets/Gift.jpg';

const GiftBox = ({ countDownDone }) => {
  const nav = useNavigate();

  useEffect(() => {
    if (!countDownDone) {
      nav('/');
    }
  }, []);

  const navigateToPage = () => {
    nav('/bday');
  };

  return (
    <div className="flex flex-col gap-10 items-center absolute top-[25%] left-[40%]">
      <div className="text-4xl font-bold text-blue-700">Open your Gift !!</div>
      <img
        src={giftImage}
        alt="Gift"
        className="w-96 hover:scale-105 transition transform cursor-pointer rounded-lg shadow-lg"
        onClick={() => { navigateToPage(); }}
      />
      <div className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-blue-700">
        Click to Open!
      </div>
    </div>
  );
};

export default GiftBox;

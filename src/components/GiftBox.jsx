import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import  giftImage  from '../assets/Gift.jpg'

const GiftBox = ({countDownDone}) => {
  const nav = useNavigate();
  useEffect(()=>{
    if (! countDownDone){
      nav('/');
    }
  },[])

  const navigateToPage = () =>{
    nav('/bday');
  }
  return (
    <div className="flex flex-col gap-10 items-center absolute top-[25%] left-[40%]">
      <div className="text-4xl">Open your Gift !!</div>
      
        <img
          src={giftImage}
          alt="some image"
          className="w-96  hover:animate-none cursor-pointer"
          onClick={()=>{navigateToPage()}}
        />
      
    </div>
  );
}

export default GiftBox
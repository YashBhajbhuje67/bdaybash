import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const FinalPage = ({ countDownDone }) => {
  
  const nav = useNavigate();

  useEffect(()=>{
    if (! countDownDone){
      nav('/');
    }
  },[])
  return (
    <div>
      <div>Happy Birth Day</div>
    </div>
  )
}

export default FinalPage
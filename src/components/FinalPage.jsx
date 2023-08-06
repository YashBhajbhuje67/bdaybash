import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const FinalPage = ({ countDownDone }) => {

  const nav = useNavigate();

  useEffect(() => {
    if (!countDownDone) {
      nav('/');
    }
  }, [])
  return (
    <div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center p-8">
  <div class="text-4xl font-semibold">Happy Birthday !</div>
</div>

  )
}

export default FinalPage
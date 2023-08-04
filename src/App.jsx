import React, { useState } from 'react'
import Counter from './components/Counter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GiftBox from './components/GiftBox'
import FinalPage from './components/FinalPage'

const App = () => {

  const [countDownDone, setCountDownDone] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Counter setCountDownDone={setCountDownDone} />}
        />
        <Route
          path="/giftbox"
          element={<GiftBox countDownDone={countDownDone} />}
        />
        <Route
          path="/bday"
          element={<FinalPage countDownDone={countDownDone} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App
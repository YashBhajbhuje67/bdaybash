import React from 'react'
import Counter from './components/Counter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GiftBox from './components/GiftBox'
import FinalPage from './components/FinalPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Counter/>}/>
        <Route path='/giftbox' element={<GiftBox/>}/>
        <Route path='/bday' element={<FinalPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
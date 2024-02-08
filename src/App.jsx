import React from 'react'
import { useState } from 'react'
import BookStore from './components/BookStore'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BookStore />
    </>
  )
}

export default App

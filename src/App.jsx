import { useState } from 'react'
import Result from './components/Result'
import Home from './components/home'

function App() {

  const [inputValue, setInputValue] = useState("")

  return (
    <>
      <Home setInputValue={setInputValue} />
      <Result inputValue={inputValue} />
    </>
  )
}

export default App

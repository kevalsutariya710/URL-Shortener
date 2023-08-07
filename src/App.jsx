import { useState } from 'react'
import "./index.css"
import Result from './components/Result'
import Home from './components/home'
import Animation from './components/Animation'


function App() {

  const [inputValue, setInputValue] = useState("")
  const [load, setLoad] = useState(true)

  return (
    <>

      <div className="container">
        <Home setInputValue={setInputValue} setLoad={setLoad} />
        <Animation />
        {
          (!load) ? <Result inputValue={inputValue} /> : console.log(load)
        }
      </div>

    </>
  )
}

export default App

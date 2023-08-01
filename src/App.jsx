import { useState } from 'react'
import "./index.css"
import Result from './components/Result'
import Home from './components/home'
import Animation from './components/Animation'


function App() {

  const [inputValue, setInputValue] = useState("")
  const [loading, setLoading] = useState(true)

  
  return (  
    <>
      <div className="container">
        <Home setInputValue={setInputValue} setLoading={setLoading} />
        <Animation />
        {
          (loading) ? console.log(loading) :
            <Result inputValue={inputValue} />
        }

      </div>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import "./index.css"
import Result from './components/Result'
import Home from './components/home'
import Animation from './components/Animation'
import Loader from './components/Loader'


function App() {

  const [inputValue, setInputValue] = useState("")
  const [loading, setLoading] = useState(true)
  const [load, setLoad] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 1400)

  },)


  return (
    <>
      {(loading) ? <Loader /> :
        <div className="container">
          <Home setInputValue={setInputValue} setLoad={setLoad} />
          <Animation />
          {
            (load) ? console.log(loading) :
              <Result inputValue={inputValue} />
          }
        </div>
      }
    </>
  )
}

export default App

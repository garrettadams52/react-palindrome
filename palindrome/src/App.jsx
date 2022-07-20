import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [value, setValue] = useState('')
  const [isPal, setIsPal] = useState("false")

  function Change(e){
    let val = e.target.value
    let revVal = [...val].reverse().join("")
    setValue(val)
    
    if(revVal === val && val.length > 0)
      setIsPal("true")
    else
      setIsPal("false")
}


  return (
    <div className="App">
      <form>
        <h1>Entered: {value}</h1>
        <input type='text' onChange={Change} placeholder= "Enter a Word" />
        <h1>Palindrome: {isPal}</h1>
      </form> 
    </div>
  )
}

export default App

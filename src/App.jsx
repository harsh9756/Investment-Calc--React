import { useState } from "react"
import Header from "./components/Header"
import Input from "./components/Input"
import Result from "./components/Result"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })
  function handleChange(lblText, value) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [lblText]: +value
      }
    })
  }

  const validInput=userInput.duration>0
  return (
    <>
      <Header />
      <Input handleChange={handleChange} userInput={userInput} />
      {validInput ? <Result inputs={userInput} /> : <p className="center">Please enter a valid Duration</p>}
    </>
  )
}

export default App

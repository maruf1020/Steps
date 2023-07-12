import React, { useState } from "react"

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div className="App">
      <Steps />
      <Steps />
    </div>
  )
}

function Steps() {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(true)

  return (
    <div>
      <button onClick={() => setOpen(curr => !curr)} className="close">&#9775;</button>
      {open && (<div className="steps">
        <div className="numbers">
          <div className={step >= 0 ? "active number" : "number"}>1</div>
          <div className={step >= 1 ? "active number" : "number"}>2</div>
          <div className={step >= 2 ? "active number" : "number"}>3</div>
        </div>

        <p className="message">step {step + 1}: {messages[step]}</p>

        <div className="buttons">
          <button className="button" style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={() => setStep(curr => curr > 0 ? curr - 1 : curr)}>previous</button>
          <button className="button" style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={() => setStep(curr => curr < 2 ? curr + 1 : curr)}>Next</button>
        </div>
      </div>)}
    </div>
  )
}
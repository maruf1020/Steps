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
      <StepMessage step={1}><span>{messages[1]}</span></StepMessage>
      <StepMessage step={2}>
        <span>{messages[2]}</span>
        <div className="buttons">
          <Button
            bgColor="#795"
            color="#333"
            onClick={() => alert('I can')}>
            <span>Alert message</span>
          </Button>
        </div>
      </StepMessage>
    </div>
  )
}

function Steps() {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(true);

  function handlePrevious() {
    setStep(curr => curr > 0 ? curr - 1 : curr)
  };

  function handleNext() {
    setStep(curr => curr < 2 ? curr + 1 : curr)
  };
  return (
    <div>
      <button onClick={() => setOpen(curr => !curr)} className="close">&#9775;</button>
      {open && (<div className="steps">
        <div className="numbers">
          <div className={step >= 0 ? "active number" : "number"}>1</div>
          <div className={step >= 1 ? "active number" : "number"}>2</div>
          <div className={step >= 2 ? "active number" : "number"}>3</div>
        </div>

        {/* <p className="message">step {step + 1}: {messages[step]}</p> */}
        <StepMessage step={step}><span>{messages[step]}</span></StepMessage>

        <div className="buttons">
          <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious}>
            <span>👈 previous</span>
          </Button>
          <Button bgColor="#7950f2" color="#fff" onClick={handleNext}>
            <span>Next 👉</span>
          </Button>
        </div>
      </div>)}
    </div>
  )
}

function StepMessage({ step, children }) {
  return (
    <p className="message">Step {step + 1}
      {children}
    </p>
  )
}

function Button({ bgColor, color, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}>
      {children}
    </button>)
}
import { useState } from "react"

function App() {
  const [counter, useCounter] = useState(0)
  return (
    <>
      <div className={`text-center border`}>
        <button onClick={() => useCounter(counter + 1)} className={`text-center border border-red-500 bg-red-500`}>
          Counter: {counter}
        </button>
      </div>
    </>
  )
}

export default App

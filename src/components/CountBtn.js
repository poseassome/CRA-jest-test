import { memo } from "react"

function CountBtn({incrementFn, decrementFn}) {
  return (
    <div>
      <button data-testid="incrementBtn" onClick={incrementFn}>+</button>
      <button data-testid="decrementBtn" onClick={decrementFn}>-</button>
    </div>
  )
}

export default memo(CountBtn);
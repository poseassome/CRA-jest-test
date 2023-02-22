import { useCallback, useState } from 'react';
import './App.css';
import CountBtn from './components/CountBtn';
import CountView from './components/CountView';


function App() {

  const [count, setCount] = useState(0);

  const incrementHandler = useCallback(() => {
    setCount(prev => prev+1);
  }, [])

  const decrementHandler = useCallback(() => {
    setCount(prev => prev-1);
  }, [])

  return (
    <div className="App">
      <CountView count={count} />
      <CountBtn incrementFn={incrementHandler} decrementFn={decrementHandler} />
    </div>
  );
}

export default App;

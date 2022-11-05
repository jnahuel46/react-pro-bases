import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';

function App() {
  return (
    <>
      <Counter initialValue={100}/>
      <CounterBy />
      <CounterEffect />
    </>
  );
}

export default App;

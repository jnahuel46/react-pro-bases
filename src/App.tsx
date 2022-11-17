import { Counter } from './bases/Counter';
import { CounterReducerComponent } from './bases/counter-reducer/CounterReducerComponent';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';
// import { CounterReducerComponent } from './bases/CounterReducerComponent';

function App() {
  return (
    <>
      <Counter initialValue={100}/>
      <CounterBy />
      <CounterEffect />
      <CounterHook/>
      <CounterReducerComponent/>
    </>
  );
}

export default App;
